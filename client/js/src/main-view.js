/* ---------- Main View ---------- */

var App = React.createClass({
  getInitialState: function () {
    return {
      searchString: '',
      statuses: [],
      classes: [],
      years: [],
      companies: []
    };
  },
  retrieveCompanies: function (parameters) {
    console.log('Sending: ');
    console.log(parameters);
    $.ajax({
      url: '/companies',
      dataType: 'json',
      type: 'GET',
      data: parameters,
      success: function (companies) {
        console.log('Successfully got data');
        this.setState({
          companies: companies
        });
      }.bind(this),
      error: function (xhr, status, error) {
        console.log('Failed to get data');
        console.log('Error with GET /companies: ' + status + ' - ' + error);
      }.bind(this)
    });
  },
  componentDidMount: function () {
    this.retrieveCompanies(this.generateStateParameters());
  },
  generateStateParameters: function (newParameter) {
    var parameters = {
      searchString: this.state.searchString,
      statuses: this.state.statuses,
      classes: this.state.classes,
      years: this.state.years
    };

    if (newParameter) {
      return _.extend(parameters, newParameter);
    }

    return parameters;
  },
  searchInputHandler: function (searchString) {
    this.setState({
      searchString: searchString
    });
    this.retrieveCompanies(this.generateStateParameters({searchString: searchString}));
  },
  statusInputHandler: function (statuses) {
    this.setState({
      statuses: statuses
    });
    this.retrieveCompanies(this.generateStateParameters({statuses: statuses}));
  },
  classInputHandler: function (classes) {
    this.setState({
      classes: classes
    });
    this.retrieveCompanies(this.generateStateParameters({classes: classes}));
  },
  yearInputHandler: function (years) {
    this.setState({
      years: years
    });
    this.retrieveCompanies(this.generateStateParameters({years: years}));
  },
  fundingSliderHandler: function () {
    this.setState({

    });
    this.retrieveCompanies(this.generateStateParameters({}));
  },
  exitSliderHandler: function () {
    this.setState({

    });
    this.retrieveCompanies(this.generateStateParameters({}));
  },
  render: function () {
    return (
      <div className="Main container">
        <div className="row row-centered">
          <h1 className="col-top col-centered">Y Combinator Companies</h1>
        </div>
        <SearchForm 
          searchInputHandler={this.searchInputHandler} 
          statusInputHandler={this.statusInputHandler} 
          classInputHandler={this.classInputHandler}
          yearInputHandler={this.yearInputHandler}
          fundingSliderHandler={this.fundingSliderHandler}
          exitSliderHandler={this.exitSliderHandler}
        ></SearchForm>
        <div className="company-count row row-centered">
          <h3 className="col-top col-centered">{this.state.companies.length} companies</h3>
        </div>
        <CompanyList companies={this.state.companies}></CompanyList>
      </div>
    );
  }
});

/* ---------- Render Main View ---------- */

React.render(
  <App></App>,
  document.getElementById('main')
);