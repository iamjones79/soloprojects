/* Register Form */

const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
  });

const onFormFieldChange = (event) => {
    const target = event.target;

    const newUserValue = target.value;

    const nameOfField = target.name;

    setFormData((prevState) => {
      const newUserObject = {
        ...prevState,
      };

      newUserObject[nameOfField] = newUserValue;

      return newUserObject;
    });
  };

eturn (
    <React.Fragment>
      <div className="container ajax sabio">
        <h2 className="text-center fw-bold py-1">Sign Up</h2>

        <form id="register">
          <div className="row align-items-center justify-content-center h-100">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                onChange={onFormFieldChange}
              />
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                onChange={onFormFieldChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                aria-describedby="email"
                placeholder="Enter email"
                onChange={onFormFieldChange}
              />
            </div>

            <div className="col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={onFormFieldChange}
              />
            </div>

            <div className="col">
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirm"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                placeholder="Confirm Password"
                onChange={onFormFieldChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="avatarUrl">Add a Picture of Yourself: </label>
            <input
              type="text"
              className="form-control"
              name="avatarUrl"
              id="avatarUrl"
              value={formData.avatarUrl}
              placeholder="URL"
              onChange={onFormFieldChange}
            />
          </div>

          <br />
          <div className="text-center submitButton">
            <button
              type="submit"
              className="btn btn-primary"
              id="register"
              onClick={onSubmitClicked}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );

/*Login Form*/

 const [formData] = useState({
    email: "",
    password: "",
  });
//Yup Form Validation
 const basicSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Is Required"),
    password: Yup.string().min(6).max(50).required("Is Required"),
  });

 //Formik Example:
  return (
    <React.Fragment>
      <div className="container ajax sabio">
        <div className="row">
          <div className="col justify-content-center text-center">
            <h2 className="text-center fw-bold py-1">Log In</h2>
            <Formik
              enableReinitialize={true}
              initialValues={formData}
              onSubmit={onSubmitClicked}
              validationSchema={basicSchema}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control"
                  ></Field>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="has-error"
                  />
                </div>
                <div className="form-group pt-2 pb-2">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="text"
                    name="password"
                    className="form-control"
                  ></Field>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="has-error"
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </React.Fragment>
  );






