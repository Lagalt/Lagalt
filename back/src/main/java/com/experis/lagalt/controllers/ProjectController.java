package com.experis.lagalt.controllers;

import com.experis.lagalt.models.Project;
import com.experis.lagalt.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = ControllerHelpers.API_V1 + "/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping
    public ResponseEntity<List<Project>> getProjects() {
        List<Project> projects = projectService.getAllProjects();
        HttpStatus status = HttpStatus.OK;
        return new ResponseEntity<>(projects, status);
    }

    @PostMapping
    public ResponseEntity<Project> createProject(@Valid @RequestBody Project project) {
        Project newProject = projectService.saveProject(project);
        HttpStatus status = HttpStatus.CREATED;
        return new ResponseEntity<>(newProject, status);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Project> getProject(@PathVariable long id) {
        Project project = new Project();
        HttpStatus status;
        if (projectService.projectExists(id)) {
            project = projectService.findProject(id);
            status = HttpStatus.OK;
        } else {
            status = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(project, status);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable long id, @Valid @RequestBody Project newProject) {
        Project returnProject = new Project();
        HttpStatus status;
        if (id != newProject.getId()) {
            status = HttpStatus.BAD_REQUEST;
            return new ResponseEntity<>(returnProject, status);
        }
        boolean projectFound = projectService.projectExists(id);
        returnProject = projectService.saveProject(newProject);
        if (projectFound) {
            status = HttpStatus.NO_CONTENT;
        } else {
            status = HttpStatus.CREATED;
        }
        return new ResponseEntity<>(returnProject, status);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Project> deleteProject(@PathVariable long id) {
        HttpStatus status;
        if (projectService.projectExists(id)) {
            projectService.deleteProject(id);
            status = HttpStatus.NO_CONTENT;
        } else {
            status = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(null, status);
    }
}
