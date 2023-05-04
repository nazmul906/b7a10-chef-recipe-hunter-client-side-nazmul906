import React from "react";

const Blog = () => {
  return (
    <div>
      <h4>
        1.Tell us the differences between uncontrolled and controlled
        components.
      </h4>
      <p>
        When behaviour of a component state is controlled by its parent
        component its called controlled element. this uncontrolled bahaviour is
        because its parent controll its state via props
        <br />
        And an uncontrolled component can manage its own state by itself
      </p>
      <h4>2. How to validate React props using PropTypes</h4>
      <p>
        PropTypes is a react machanism to validate props. we validate props to
        debug unexpected error. to validate props with Proptypes we first import
        PropTypes. Then we use
        <br />
        propsname =PropTypes.string.isRequired , inside a functional component
        named MyComponent to validate the recived props. There are few more
        props validator like
        PropTypes.bool,PropTypes.number,PropTypes.func,PropTypes.array etc
      </p>
      <h4>3.Tell us the difference between nodejs and express js.</h4>
      <p>
        node js is a server side technology which work best with single page
        application while express js is a framework of node js.It means express
        need nodejs to run. Node js is super speedy than express as it has
        non-blocking architecture and it has large library of js module.
        <br />
        Express js makes it simpler to build server side app with many features
        and powerful api route ,it also offer middleware and can integrate in
        database like mongoDB
      </p>
      <h4>4. What is a custom hook, and why will you create a custom hook?</h4>
      <p>
        custom hook is used to reuse the hook when necessary to avoid repeating
        the same code. It is applied with the word "use"
        <br />
        we need to make custom hooks to make code clean and reliable
      </p>
    </div>
  );
};

export default Blog;
