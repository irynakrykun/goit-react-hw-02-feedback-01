import  Section  from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
 const  App  = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Section title='Please leave feedback' />
      <FeedbackOptions/>
    
     
    </div>
  );
};
export default App;