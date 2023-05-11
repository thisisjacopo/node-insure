// routes/client.js
const express = require("express");
const router = express.Router();
const clientService = require("./shared");

router.get("/:id", async (req, res) => {
  try {
    const currentUser = await clientService.getRandomCurrentUsers();
    const client = await clientService.getClientById(req.params.id);
    if (currentUser.role !== "users" || currentUser.role !== "admin") {
      return res.status(405).send("Not allowed");
    }
    if (!client) {
      return res.status(404).send("Client not found");
    }
    res.send(client);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:name", async (req, res) => {
  try {
    const currentUser = await clientService.getRandomCurrentUsers();
    const client = await clientService.getClientByName(req.params.name);
    if (currentUser.role !== "admin") {
      return res.status(405).send("Not allowed");
    }
    if (!client) {
      return res.status(404).send("Client not found");
    }
    res.send(client);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:name/policies", async (req, res) => {
  try {
    const currentUser = await clientService.getRandomCurrentUsers();
    const policies = await clientService.getPoliciesByUserName(req.params.name);

    if (currentUser.role !== "admin") {
      return res.status(405).send("Not allowed");
    }
    if (!policies) {
      return res.status(404).send("No policies or users were found");
    }
    if (policies && policies.length === 0) {
      return res.status(404).send("No policies found for this user");
    }
    res.send(policies);
  } catch (err) {
    console.error(err);
  }
});

router.get("/policy/:policyNumber", async (req, res) => {
  try {
    const currentUser = await clientService.getRandomCurrentUsers();
    const client = await clientService.getUserByPolicyNumber(
      req.params.policyNumber
    );
    if (currentUser.role !== "admin") {
      return res.status(405).send("Not allowed");
    }
    if (!client) {
      return res.status(404).send("Policy not found");
    }
    res.send(client);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
