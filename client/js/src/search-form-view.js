/* ---------- Search Form View ---------- */

var SearchInput = React.createClass({
  searchInputHandler: function () {
    var searchString = this.refs.searchInput.getDOMNode().value;
    this.props.searchInputHandler(searchString);
  },
  render: function () {
    return (
      <div className="searchInput input-group col-top col-centered col-md-6">
        <label for="searchInput">Search</label>
        <input id="searchInput" className="form-control" type="text" ref="searchInput" placeholder="Name, Description, etc..." onChange={this.searchInputHandler}></input>
      </div>
    );
  }
});

var StatusInput = React.createClass({
  statusInputHandler: function () {
    var statuses = [];
    for (var key in this.refs) {
      if (this.refs[key].getDOMNode().checked) {
        statuses.push(this.refs[key].getDOMNode().value);
      }
    }
    this.props.statusInputHandler(statuses);
  },
  render: function () {
    return (
      <div className="statusInput input-group col-top col-centered col-md-2">
        <label className="checkbox">Status</label>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Operating" ref="operatingInput" onChange={this.statusInputHandler}></input>
            Operating
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Exited" ref="exitedInput" onChange={this.statusInputHandler}></input>
            Exited
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Dead" ref="deadInput" onChange={this.statusInputHandler}></input>
            Dead
          </label>
        </div>
      </div>
    );
  }
});

var ClassInput = React.createClass({
  classInputHandler: function () {
    var classes = [];
    for (var key in this.refs) {
      if (this.refs[key].getDOMNode().checked) {
        classes.push(this.refs[key].getDOMNode().value);
      }
    }
    this.props.classInputHandler(classes);
  },
  render: function () {
    return (
      <div className="classInput input-group col-top col-centered col-md-2">
        <label className="checkbox">Class</label>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="6" ref="summerInput" onChange={this.classInputHandler}></input>
            Summer
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="1" ref="winterInput" onChange={this.classInputHandler}></input>
            Winter
          </label>
        </div>
      </div>
    );
  }
});

var YearInput = React.createClass({
  yearInputHandler: function () {
    var years = [];
    for (var key in this.refs) {
      if (this.refs[key].getDOMNode().checked) {
        years.push(this.refs[key].getDOMNode().value);
      }
    }
    this.props.yearInputHandler(years);
  },
  render: function () {
    return (
      <div className="yearInput input-group col-top col-centered col-md-3">
        <label className="checkbox">Year</label>
        <div className="row row-top">
          <div className="controls col-md-4">
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2015" ref="2015Input" onChange={this.yearInputHandler}></input>
                2015
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2014" ref="2014Input" onChange={this.yearInputHandler}></input>
                2014
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2013" ref="2013Input" onChange={this.yearInputHandler}></input>
                2013
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2012" ref="2012Input" onChange={this.yearInputHandler}></input>
                2012
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2011" ref="2011Input" onChange={this.yearInputHandler}></input>
                2011
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2010" ref="2010Input" onChange={this.yearInputHandler}></input>
                2010
              </label>
            </div>
          </div>
          <div className="controls col-md-4">
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2009" ref="2009Input" onChange={this.yearInputHandler}></input>
                2009
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2008" ref="2008Input" onChange={this.yearInputHandler}></input>
                2008
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2007" ref="2007Input" onChange={this.yearInputHandler}></input>
                2007
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2006" ref="2006Input" onChange={this.yearInputHandler}></input>
                2006
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2005" ref="2005Input" onChange={this.yearInputHandler}></input>
                2005
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var FundingSlider = React.createClass({
  componentDidMount: function () {
    var sliderNode = this.refs.fundingSlider.getDOMNode();
    var fundSliderHandler = this.props.onChange;
    noUiSlider.create(sliderNode, {
      start: [0, 3000000000],
      connect: true,
      range: {
        'min': 0,
        'max': 3000000000
      }
    });
    // sliderNode.Link('lower').to('-inline-<div class="tooltip"></div>', function ( value ) {
    //   $(this).html(
    //       '<span>' + value.substr(0, value.length - 1) + '</span>'
    //   );
    // });
    // sliderNode.Link('upper').to('-inline-<div class="tooltip"></div>', function ( value ) {
    //   $(this).html(
    //       '<span>' + value.substr(0, value.length - 1) + '</span>'
    //   );
    // });
    // sliderNode.on({
    //   change: function(event){
    //       changeHandler($el.val());
    //   }
    // });
  },
  render: function () {
    return (
      <div className="slider-wrapper">
        <label><span className="slider-label">Funded Amount</span></label>
        <div ref="fundingSlider"></div>
      </div>
    );
  }
});

var ExitSlider = React.createClass({
  componentDidMount: function () {
    var sliderNode = this.refs.exitSlider.getDOMNode();
    var exitSliderHandler = this.props.onChange;
    noUiSlider.create(sliderNode, {
      start: [0, 1000000000],
      connect: true,
      range: {
        'min': 0,
        'max': 1000000000
      }
    });
  },
  render: function () {
    return (
      <div className="slider-wrapper">
        <label><span className="slider-label">Exited Amount</span></label>
        <div ref="exitSlider"></div>
      </div>
    );
  }
});

var SearchForm = React.createClass({
  searchInputHandler: function (searchString) {
    this.props.searchInputHandler(searchString);
  },
  statusInputHandler: function (statuses) {
    this.props.statusInputHandler(statuses);
  },
  classInputHandler: function (classes) {
    this.props.classInputHandler(classes);
  },
  yearInputHandler: function (years) {
    this.props.yearInputHandler(years);
  },
  fundingSliderHandler: function () {
    this.props.fundingSliderHandler();
  },
  exitSliderHandler: function () {
    this.props.exitSliderHandler();
  },
  render: function () {
    return (
      <div className="searchForm">
        <div className="row row-centered">
          <SearchInput searchInputHandler={this.searchInputHandler}></SearchInput>
        </div>
        <div className="row row-centered">
          <StatusInput statusInputHandler={this.statusInputHandler}></StatusInput>
          <ClassInput classInputHandler={this.classInputHandler}></ClassInput>
          <YearInput yearInputHandler={this.yearInputHandler}></YearInput>
        </div>
        <div className="row row-centered">
          <FundingSlider fundingSliderHandler={this.fundingSliderHandler}></FundingSlider>
        </div>
        <div className="row row-centered">
          <ExitSlider exitSliderHandler={this.exitSliderHandler}></ExitSlider>
        </div>
      </div>
    );
  }
});