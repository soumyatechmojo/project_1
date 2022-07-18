import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

export default function Login() {
  const navigate = useNavigate() 
  const [value,setValue]=useState({

    email:"",

    password:""




})

const[err,setErr]=useState({

    email:"",

    password:""



})

function data (){

    console.log("Data :",value)

}

const onChange = (ele)=>{

    const {name,value}= ele.target

    setValue((ele)=>({...ele,[name]:value}))

}



const onSubmit= function(ele){

    ele.preventDefault();

    if(!/\s+@s+\.\s+/.test(value.email)){
       setErr((ele)=>({
        ...ele,email:"Invalid Email"

        }))

    }

    if(!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(value.password)){

        setErr((ele)=>({

            ...ele,password:"password length should be min 8 and [Aa@1]"

        }))

    }

    data();



}
  return (
    <div>
     <section class="vh-100 background1">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong radius" >
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">log In</h3>

            <div class="form-outline mb-4">
              <input name='email' type="email" id="typeEmailX-2" class="form-control form-control-lg"  placeholder='Enter email' onChange={onChange}value={value.email}/>
              <label class="form-label" for="typeEmailX-2" >Email</label>
              {
                !!err.email && (<div>
                  <p class="danger">{err.email}</p>
                </div>)
              }
            </div>

            <div class="form-outline mb-4">
              <input name='password' type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder='Password'onChange={onChange}value={value.password} />
              <label class="form-label" for="typePasswordX-2">Password</label>
              {!!err.password && (<div>
                  <p class="danger">{err.password}</p>
                </div>)
              }
            </div>

            
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={navigate('/products')}>Login</button>

            <hr class="my-4"/>

          

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}