import React from "react";
import "./index.css";

import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

// import componets
import InputPassword from "../../components/input_password";

// Login redes sociais
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import LinkedIn from "react-linkedin-login-oauth2";

// import configs
import ConfigAuthGoogle from "../../config/auth_google";

export default function login() {
  const responseLinkedin = response => {
    console.log(response);
  };

  const responseFacebook = response => {
    console.log(response);
  };

  function sendEvent(event) {
    event.preventDefault();
  }

  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <div className="container">
      <div className="container_description">
        <h1>SuaEmpresa</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea unde quis
          eos, accusantium necessitatibus repudiandae. Numquam ex quas, est
          voluptatem quidem cupiditate vitae nulla, cumque harum accusantium,
          optio voluptatum sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea unde quis
          eos, accusantium necessitatibus repudiandae. Numquam ex quas, est
          voluptatem quidem cupiditate vitae nulla, cumque harum accusantium,
          optio voluptatum sunt.
        </p>
        <span>Copyright © 2019 - Samuel Lucas</span>
      </div>
      <div className="container_login">
        <h1>login</h1>
        <form onSubmit={sendEvent}>
          <label htmlFor="user">Email:</label>
          <input type="email" name="user" id="" />
          <label htmlFor="password">Senha:</label>
          <InputPassword />
          <a href="">Esqueci minha senha.</a>
        </form>
        <div className="groupbutton">
          <button>Enviar</button>
        </div>
        <p>
          <div></div> ou <div></div>
        </p>

        <div className="iconlogin">
          {/* <FacebookLogin
            appId="573828906769187"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="icon"
            textButton=""
            autoLoad={false}
            icon={<FaFacebook />}
          /> */}

          {/* <GoogleLogin
            clientId={ConfigAuthGoogle.clinet_id}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          /> */}
          <FaFacebook className="icon" />
          <FaGoogle className="icon" />
          <FaLinkedinIn className="icon" />
          {/* <LinkedIn
            clientId="774w5ymtue8ize"
            onFailure={responseLinkedin}
            onSuccess={responseLinkedin}
            scope="r_emailaddress r_liteprofile w_member_social"
            redirectUri="http://localhost:3000/linkedin"
            className="icon"
          >
            <FaLinkedinIn />
          </LinkedIn> */}
        </div>
      </div>

      <div className="container_cadastro">
        <h1>Cadastro</h1>
        <form onSubmit={sendEvent}>
          <label htmlFor="user">Email:</label>
          <input type="email" name="user" id="" />
          <label htmlFor="password">Senha:</label>
          <InputPassword />
          <label htmlFor="password">Confirme a sua senha:</label>
          <InputPassword />

          <div className="checkgroup">
            <input
              type="checkbox"
              className="checkboxinput"
              name="checklabel"
            />
            <label htmlFor="checklabel" className="cheboxclass">
              Cliacando aqui você concorda com nossos Termos, Política de Dados
              e Política de Cookies.
            </label>
          </div>
        </form>
        <div className="groupbutton">
          <button>Cadastra-se</button>
        </div>
      </div>
    </div>
  );
}
