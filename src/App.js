import './App.css';
import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Navigation from './components/Navigation/Navigation'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'

  const particlesInit = async (main) => {
    // console.log(main);
 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {

  };

  const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#fff"
        },
        // shape: {
        //     type: "star",
        //     options: {
        //         sides: 5
        //     }
        // },
        opacity: {
            value: 0.8,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
                enable: true,
                speed: 4,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#fff",
            width: 1,
            opacity: 0.4
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: ["repulse"]
            },
            onclick: {
                enable: false,
                mode: "bubble"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: .7
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
  }

export default function App() {


  const [faceDetect, setFaceDetect] = React.useState({
    input: "",
    imageUrl: "",
    box: {}
  })

  const [page, setPage] = React.useState({
    route:'signin',
    isSignedIn: false,
  })

  const {input, imageUrl, box} = faceDetect
  const {route, isSignedIn} = page

  const onInputChange = (event) => {
    setFaceDetect(prevUrl => ({ 
        ...prevUrl,
        input: event.target.value 
    }))
  }

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box

    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  const displayFaceBox = (box) => {
    setFaceDetect(prevData => ({ 
        ...prevData,
        box: box 
    }))
  }

  const returnClarifaiJSONRequest = (imageUrl) => {
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = '3d64170bd229429d9f0cab2e8356f7a9';
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = 'adammuana20';       
    const APP_ID = 'my-first-application';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'face-detection';  
    const IMAGE_URL = imageUrl;

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    return requestOptions
  }

  const onBtnSubmit = () => {
    setFaceDetect(prevInput => ({
        ...prevInput,
        imageUrl: prevInput.input,
        box: {}
    }))
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection'+ "/outputs", returnClarifaiJSONRequest(input))
    .then(response => response.json())
    .then(result => displayFaceBox(calculateFaceLocation(result)))
    .catch(error => console.log('error', error))
  }

  const onRouteChange = (route) => {
    if(route === 'signout') {
        setPage(prevData => ({
            ...prevData,
            isSignedIn: false
        }))
    } else if(route === 'home') {
        setPage(prevData => ({
            ...prevData,
            isSignedIn: true
        }))

        setFaceDetect({input: '', imageUrl: '', box: {}})
    }
    setPage(prevData => ({
        ...prevData,
        route: route
    }))
  }

  return (
    <div className="App">
      <Particles 
      className="particles"
      init={particlesInit} 
      loaded={particlesLoaded} 
      options={particlesOptions}
      />
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      { route === 'home'
      ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm 
                onInputChange={onInputChange} 
                onBtnSubmit={onBtnSubmit}
            />
            <FaceRecognition 
                box={box}
                imageUrl={imageUrl}
            />
        </div>
      : (
            route === 'signin'
            ? <SignIn onRouteChange={onRouteChange} />
            : <Register onRouteChange={onRouteChange} />
        )
      } 
    </div>
  );
}
