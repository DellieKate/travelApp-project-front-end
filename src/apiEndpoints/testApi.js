import apiClient from "./apiClient.js";

async function testApi () {
  const data = await apiClient('/cities');
  console.log('Cities:', data);
}

testApi();