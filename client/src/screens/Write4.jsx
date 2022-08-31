//import React from "react";
import bgImg from "../assets/manzara3.png";
import kitap1 from "../assets/yazmasanati.jpg";
import axios from "axios";
import { ArrowRightIcon, RefreshIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

/*
function Write4() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `newPath`;
    navigate("/write5");
  };

  let state = { moods: null };

  const getData = () => {
    axios({
      method: "get",
      url: "localhost:5001/api/v1/moods/uploadphoto",
      responseType: "stream",
    }).then(function (response) {
      console.log(response.data);
      state = response.data;
    });
  };

=======
import React from 'react'
import bgImg from "../assets/manzara14.jpg"
import kitap1 from "../assets/yazmasanati.jpg"
import {ArrowRightIcon, RefreshIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Write4() {
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate("/write5");
    }
>>>>>>> 7c53b02beebe616c947398f2f374194097657953
  return (
    <div
      onLoad={getData}
      className="w-full h-screen flex flex-col justify-center"
    >
      <div className="w-full h-screen absolute z-100">
        <img
          className="w-full h-screen absolute object-cover"
          src={bgImg}
          alt=""
        />
        <div className="w-full h-screen absolute  bg-purple/70 "></div>
      </div>
      <div className="max-w[1240px] m-auto px-40 text-white z-10">
        <div className="flex items-center mb-5">
          <p className="mr-3">4</p>
          <h1 className="text-md md:text-2xl font-bold">
            Çok okumak, daha güzel yazmak için bir yoldur. Eğer ilhamınızın
            kapalı olduğunu düşünüyorsanız yazmayı bırakın ve okumaya başlayın.
          </h1>
        </div>
        <a className="text-[#56E1FF] mx-5 flex" href="">
          <RefreshIcon className="w-5 mr-2"></RefreshIcon> Rastgele kitap öner
        </a>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-7 m-5">
          <div className="flex flex-col items-center">
            <img className="m-5 w-[150px]" src={kitap1} alt="" />
            <p className="text-white text-lg">Yazma Sanatı</p>
            <p className="text-content">Stephan King</p>
          </div>
          <div>
            <h1 className="text-2xl">Konu 2</h1>
            <p className="text-content">Lorem Ipsum</p>
          </div>
          <div>
            <h1 className="text-2xl">Konu 3</h1>
            <p className="text-content">Lorem Ipsum</p>
          </div>
          <div>
            <h1 className="text-2xl">Konu 4</h1>
            <p className="text-content">Lorem Ipsum</p>
          </div>
        </div>
        <button
          onClick={routeChange}
          className="text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg"
        >
          Devam edin <ArrowRightIcon className="w-5 ml-2"></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
}
*/
/*
import api from './api.json'
export default function SearchMovie(){
    const[typing,setTyping] = useState('')
    const[movieData, setMovieData] =useState([]);

    useEffect(() =>{
        getMovies();
        console.log(movieData)
    },[typing])

    async function getMovies(){
        const data= api.filter(item=> item.title.toLowerCase().includes(typing.toLowerCase())).map(i => {
            return{
                id:i.episode_id,
                title:i.title,
                img:i.img
            }
        })
        setMovieData(data);
    }
*/

import React, { Component, componentDidMount, useEffect } from "react";

export default class Write4 extends Component {
  state = { moods: [] };

  routeChange = () => {
    let path = `newPath`;
    this.navigate("/write5");
  };
  navigate = useNavigate();

  //async getData() {}

  async componentDidMount() {
    try {
      const response = await axios.get(
        "localhost:5001/api/v1/moods/uploadphoto"
      );
      console.log(response.data.hits);
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    return (
      <div className="w-full h-screen flex flex-col justify-center">
        <div className="w-full h-screen absolute z-100">
          <img
            className="w-full h-screen absolute object-cover"
            src={bgImg}
            alt=""
          />
          <div className="w-full h-screen absolute  bg-purple/70 "></div>
        </div>

        <div className="max-w[1240px] m-auto px-40 text-white z-10">
          <div className="flex items-center mb-5">
            <p className="mr-3">4</p>
            <h1 className="text-md md:text-2xl font-bold">
              Çok okumak, daha güzel yazmak için bir yoldur. Eğer ilhamınızın
              kapalı olduğunu düşünüyorsanız yazmayı bırakın ve okumaya
              başlayın.
            </h1>
          </div>
          <a className="text-[#56E1FF] mx-5 flex" href="">
            <RefreshIcon className="w-5 mr-2"></RefreshIcon> Rastgele kitap öner
          </a>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-7 m-5">
            <div className="flex flex-col items-center">
              <img className="m-5 w-[150px]" src={kitap1} alt="" />
              <p className="text-white text-lg">Yazma Sanatı</p>
              <p className="text-content">Stephan King</p>
            </div>
            <div>
              <h1 className="text-2xl">Konu 2</h1>
              <p className="text-content">Lorem Ipsum</p>
            </div>
            <div>
              <h1 className="text-2xl">Konu 3</h1>
              <p className="text-content">Lorem Ipsum</p>
            </div>
            <div>
              <h1 className="text-2xl">Konu 4</h1>
              <p className="text-content">Lorem Ipsum</p>
            </div>
          </div>
          <button
            onClick={this.routeChange}
            className="text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg"
          >
            Devam edin <ArrowRightIcon className="w-5 ml-2"></ArrowRightIcon>
          </button>

          <div className="max-w[1240px] m-auto px-10 md:px-40 text-white z-10">
            <div className="flex flex-col md:flex-row md:items-center mb-5 mx-5 md:mx-0">
              <p className="mr-3">4</p>
              <h1 className="text-lg md:text-2xl font-bold">
                Çok okumak, daha güzel yazmak için bir yoldur. Eğer ilhamınızın
                kapalı olduğunu düşünüyorsanız yazmayı bırakın ve okumaya
                başlayın.
              </h1>
            </div>
            <a className="text-[#56E1FF] mx-5 flex" href="">
              <RefreshIcon className="w-5 mr-2"></RefreshIcon> Rastgele kitap
              öner
            </a>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-7 m-5">
              <div className="flex flex-col items-center">
                <img
                  className="m-5 w-[100px] md:w-[150px]"
                  src={kitap1}
                  alt=""
                />
                <p className="text-white text-md md:text-lg">Yazma Sanatı</p>
                <p className="text-content text-sm md:text-md">Stephen King</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="m-5 w-[100px] md:w-[150px]"
                  src={kitap1}
                  alt=""
                />
                <p className="text-white text-md md:text-lg">Yazma Sanatı</p>
                <p className="text-content text-sm md:text-md">Stephen King</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="m-5 w-[100px] md:w-[150px]"
                  src={kitap1}
                  alt=""
                />
                <p className="text-white text-md md:text-lg">Yazma Sanatı</p>
                <p className="text-content text-sm md:text-md">Stephen King</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="m-5 w-[100px] md:w-[150px]"
                  src={kitap1}
                  alt=""
                />
                <p className="text-white text-md md:text-lg">Yazma Sanatı</p>
                <p className="text-content text-sm md:text-md">Stephen King</p>
              </div>
            </div>
            <button
              onClick={this.routeChange}
              className="text-purple px-[16px] py-[8px] bg-white flex float-right items-center rounded-lg"
            >
              {" "}
              <span className="hidden md:block">Devam edin</span>{" "}
              <ArrowRightIcon className="w-5 md:ml-2"></ArrowRightIcon>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//export default Write4;
