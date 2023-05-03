function Bath(props) {
  return (
<>
<h1>{props.size} {props.name}</h1>
</>   
// Accepts a size prop and renders the text “[size] Bath”, i.e., “Half Bath”, “Full Bath”>
  );
}

export default Bath;