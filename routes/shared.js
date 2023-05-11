const axios = require("axios");
const CLIENT_URL = "http://www.mocky.io/v2/5808862710000087232b75ac";
const POLICY_URL = "http://www.mocky.io/v2/580891a4100000e8242b75c5";

const getClientById = async (id) => {
  const res = await axios.get(CLIENT_URL);
  const clients = res.data.clients;
  return clients.find((client) => client.id === id);
};

const getClientByName = async (name) => {
  const res = await axios.get(CLIENT_URL);
  const clients = res.data.clients;
  const client = clients.find(
    (client) => client.name.toLowerCase() === name.toLowerCase()
  );
  if (!client) {
    return null
  }
  return client;
};

const getPoliciesByUserName = async (name) => {
  const client = await getClientByName(name);
  if (client === null) {
    return null
  }
  const res = await axios.get(POLICY_URL);
  const policies = res.data.policies;
  return policies.filter((policy) => policy.clientId === client.id);
};

const getUserByPolicyNumber = async (policyNumber) => {
  const res = await axios.get(POLICY_URL);
  const policies = res.data.policies;
  const policy = policies.find((policy) => policy.id === policyNumber);
  if (!policy) {
    return null;
  }
  const clientId = policy.clientId;
  const client = await getClientById(clientId);
  return client;
};

const getRandomCurrentUsers = async () => {
  try {
    const res = await axios.get(CLIENT_URL);
    const clients = res.data.clients;
    return clients[Math.floor(Math.random() * clients.length)];
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getClientById,
  getClientByName,
  getPoliciesByUserName,
  getUserByPolicyNumber,
  getRandomCurrentUsers,
};
