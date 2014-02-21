var models = require('../models');

exports.projectInfo = function(req, res) {
  var projectID = req.params.id;

  // query for the specific project and
  // call the following callback
  models.Project
    .find({"_id": projectID})
    .exec(afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);
  
  var newProject = new models.Project(form_data);
  newProject.save( fucntion(err){
      if(err) console.log(err);
      res.send();
    });
  }

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Project
    .find({"_id": projectID})
    .remove()
    .exec(deleteCallback);
    
  function deleteCallback(err) {
    if(err)console.log(err); 
    res.send();
  }
}


