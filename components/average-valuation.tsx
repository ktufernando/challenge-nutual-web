import { Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { valuationsService } from "../services/valuations-service";
import AverageValuationResult from "./average-valuation-result";

interface Values {
  city: string;
}

export default function AverageValuation() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  return (
    <div className="container px-4">
      <div className="row p-3 shadow">
        <h1 className="display-4 mb-3">Challenge Nutual</h1>
        <p className="mb-3">
          Write the city you want to know the average value of m2
        </p>

        <Formik
          initialValues={{
            city: "",
          }}
          validate={(values) => {
            if (!values.city) {
              return { city: "The city is required to do the search" };
            }
          }}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            try {
              const r = await valuationsService.getAverageValuationForCity(
                values.city
              );
              setData(r.data);
              setError(null);
            } catch (e: any) {
              setData(null);
              setError(e.message);
            }
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isValidating, isSubmitting }) => (
            <Form>
              <div className="row g-1">
                <div className="col-6">
                  <Field
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="Barcelona"
                  />
                  {errors.city && touched.city && (
                    <p className="text-danger">{errors.city}</p>
                  )}
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-primary "
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Search
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        {error && error === "500" ? (
          <div className="row gy-3">
            <div className="alert alert-warning shadow" role="alert">
              Please try again later, the servers are busy!
            </div>
          </div>
        ) : null}
        {error && error === "400" ? (
          <div className="row gy-3">
            <div className="alert alert-warning shadow" role="alert">
              The city do not have valuations. Try another city!
            </div>
          </div>
        ) : null}

        {data ? <AverageValuationResult data={data} /> : null}
      </div>
    </div>
  );
}
