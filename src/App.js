import React from "react";
import { FaFacebook, FaApple, FaPlaystation, FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsXbox } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[url(https://lolstatic-a.akamaihd.net/rso-authenticator-ui/0.68.48/assets/valorant_desktop_background_2x.jpg)] bg-cover bg-center">
      <div className=" flex w-full  flex-col justify-center items-center">
        <img className="w-44 self-start mb-6 ml-8" src="https://cdn.playersupport.riotgames.com/support-site/images/general/riot-logo.png"></img>
        <div className="flex flex-col h-[500px] items-center justify-between bg-white p-12">

          <strong><h1>Fazer Login</h1></strong>

          <input className="bg-gray-100 w-full h-10 mb-1" type="text" placeholder="NOME DE USUÁRIO"></input>
          <input className="bg-gray-100 w-full h-10 mb-1" type="text" placeholder="SENHA"></input>

          <div className="flex gap-2">
            <button className="bg-blue-700 w-14 rounded-lg flex justify-center"><FaFacebook size={27} color="#ffffff" /> </button>
            <button className="bg-white w-14 rounded-lg border border-gray-400 flex justify-center"><FcGoogle size={25} /></button>
            <button className="bg-black w-14 rounded-lg flex justify-center"><FaApple size={25} color="#ffffff" /> </button>
            <button className="bg-green-600 w-14 rounded-lg flex justify-center"><BsXbox size={23} color="#ffffff" /> </button>
            <button className="bg-blue-900 w-14 rounded-lg flex justify-center"><FaPlaystation size={25} color="#ffffff" /> </button>
          </div>

          <div className="flex items-center justify-center">
            <input className="mr-2" type="checkbox"></input>
            <h1>Manter login</h1>
          </div >

          <button className=" w-20 h-20 border border-gray-200 rounded-3xl flex items-center justify-center"><FaArrowRight color="#C0C0C0" size={30} /></button>

          <a href="#">NÃO CONSEGUE FAZER LOGIN?</a>
          <a href="#">CRIAR CONTA</a>
        </div>
      </div>
    </div>
  );
}

export default App;
