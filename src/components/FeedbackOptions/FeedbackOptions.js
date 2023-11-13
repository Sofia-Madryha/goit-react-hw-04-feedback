import { nanoid } from 'nanoid';


export const FeedbackOptions  = ({ options, onChangeState })=> {
    
  return <ul>
  {options.map((option) => (<li key={nanoid()}><button type="button" onClick={(evt)=> onChangeState(evt.target.value)} value={option}>{option}</button></li>))}
  </ul>
  }


