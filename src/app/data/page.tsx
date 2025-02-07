import axios from "axios";

async function GetData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
  return res.data;
}

async function Data() {
  const ans = await GetData();
  const an2 = ans.map((ele: any) => {
    return <Tip title={ele.title}></Tip>;
  });
  return <div>{an2}</div>;
}
interface props {
    title:String
}

function Tip({ title }:props) {
  return <div>{title}</div>;
}

export default Data;
