const SignUp = () => {
  return (
    <div className="max-w-80 mx-auto">
      <h2 className="texxl">Sign Up</h2>
      <form>
        <input className="p-2" type="text" name placeholder="Email" />
        <input className="p-2" type="password" placeholder="Password" />
        <button type="submit"> Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
