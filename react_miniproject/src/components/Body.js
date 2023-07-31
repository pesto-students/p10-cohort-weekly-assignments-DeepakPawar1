import "./Body.css";
import bodybuilder from '../assets/9096883.jpg'
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { createWorkoutPlan } from "../features/userDetailSlice";
import Spinner from "./Spinner";
function Body(){


    const dispatch = useDispatch();
    const [age, setAge] = useState('');
    const [showPlan , setShowPlan] = useState('false');
  const [gender, setGender] = useState('');
  const [currentFitnessLevel, setCurrentFitnessLevel] = useState('');
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [workoutDuration, setWorkoutDuration] = useState('');
  const workoutPlan = useSelector((state) => state.app.detail);
  const loading = useSelector((state) => state.app.loading);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const prompt = "Provide me workout routine for following details in html paragraph tags " + JSON.stringify({ age, gender, currentFitnessLevel, muscleGroups, workoutDuration });
    
    dispatch(createWorkoutPlan(prompt));
};
    const handleShowplan= () =>{
        setShowPlan(!showPlan)
    }
    
    return(
<div className="Body">
    { showPlan ? 
    <>
    {loading ? <Spinner /> : 
    <>
    <div className="title">
        
        <div className="formBox">
        <form onSubmit={handleSubmit}>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </label>
      

      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
     

      <label>
        Current Fitness Level:
        <select value={currentFitnessLevel} onChange={(e) => setCurrentFitnessLevel(e.target.value)} required>
          <option value="">Select Fitness Level</option>
          <option value="beginner">Beginner (No Workout Experience)</option>
          <option value="intermediate">Intermediate (3 months of workout experience.)</option>
          <option value="advanced">Advanced/Pro (Actively training for more than a year)</option>
        </select>
      </label>
     

      <label className="TMG">
        Target Muscle Groups:
        <input type="checkbox" checked={muscleGroups.includes('chest')} onChange={() => setMuscleGroups(prev => prev.includes('chest') ? prev.filter(m => m !== 'chest') : [...prev, 'chest'])} />Chest
        <input type="checkbox" checked={muscleGroups.includes('back')} onChange={() => setMuscleGroups(prev => prev.includes('back') ? prev.filter(m => m !== 'back') : [...prev, 'back'])} />Back
        <input type="checkbox" checked={muscleGroups.includes('legs')} onChange={() => setMuscleGroups(prev => prev.includes('legs') ? prev.filter(m => m !== 'legs') : [...prev, 'legs'])} />Legs
        <input type="checkbox" checked={muscleGroups.includes('arms')} onChange={() => setMuscleGroups(prev => prev.includes('arms') ? prev.filter(m => m !== 'arms') : [...prev, 'arms'])} />Arms
      </label>
     

      <label>
        Desired Workout Duration (in minutes):
        <input type="number" value={workoutDuration} onChange={(e) => setWorkoutDuration(e.target.value)} required />
      </label>
      
        <div className="sub">
      <button type="submit">Submit</button>
      {workoutPlan ? <button className="blink" onClick={handleShowplan}>Get your plan</button>:<></>  }
      </div>
    </form>
        </div>
        {/* {loading ? <></> :
        <form>
           <div dangerouslySetInnerHTML={{ __html: workoutPlan }} />
        </form>
        } */}
    </div>
    </>
    }
    </>
    :<form>
    <div dangerouslySetInnerHTML={{ __html: workoutPlan }} />
    <button  onClick={handleShowplan}>Back</button>
 </form> 
}
    <div className="image">
    <h6>UNLOCK YOUR FULL POTENTIAL</h6>
        <h5>Your Personalized Workout Planner</h5>
    <img src={bodybuilder} alt="Logo" />
    {/* <div className="loading-icon">{loading ? <Spinner /> : null}</div> */}
    </div>
    
</div>

    )
}

export default Body;