interface Data {
  data: Array<Valuation>;
}
interface Valuation {
  _id: string;
  average: number;
  count: number;
}

export default function AverageValuationResult(data: Data) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {data.data.map((e) => {
        return (
          <div className="col">
            <div className="card-group">
              <div className="card">
                <h5 className="card-header display-6">{e._id}</h5>
                <div className="card-body">
                  <h6 className="card-title">Average Value M2: ${e.average}</h6>
                  <p className="card-text">{e.count} appraised real estate.</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
