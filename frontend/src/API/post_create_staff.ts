export default async function TestGet() {
  const response = await fetch("http://localhost:5021/helloworld");
  const backendapi = await response.json();
  console.log(backendapi);
}