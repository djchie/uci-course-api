/* ---------- Company List View ---------- */

var CompanyCell = React.createClass({
  clickHandler: function () {
    console.log('Cell clicked!');
    console.log(this.props.company.websiteUrl);
    window.open(this.props.company.crunchBaseUrl, '_blank');
  },
  render: function () {
    var statusClass = this.props.company.status.toLowerCase();
    var classString = 'Summer';
    if (this.props.company.cohort === 1) {
      classString = 'Winter';
    }
    var descriptionString = this.props.company.description;
    if (descriptionString === '0') {
      descriptionString = 'Description not available';
    }

    var fundedValue = this.props.company.fundingValue;
    // Not sure why we need to compare it to a string...
    if (fundedValue === '0') {
      fundedValue = 'N/A';
    } else {
      fundedValue = '$' + accounting.formatNumber(fundedValue);
    }

    var exitedAtValue = this.props.company.exitValue;
    if (exitedAtValue === 0) {
      exitedAtValue = 'N/A';
    } else {
      exitedAtValue = '$' + accounting.formatNumber(exitedAtValue);
    }

    // To use company logos, use the following as the src image
    // src={"https://logo.clearbit.com/" + this.props.company.imageUrl} onerror="this.src = '../assets/yc-logo.png'"
    return (
      <div className="companyCell col-centered col-md-9" onClick={this.clickHandler}>
        <div className="row">
          <div className="col-md-2">
            <img className="company-logo" src="../assets/yc-logo.png"></img>
          </div>
          <div className="col-md-8">
            <div>
              <span className="company-name">{this.props.company.name}</span> - <span className={statusClass}>{this.props.company.status}</span>
            </div>
            <div>
              <a href="{this.props.company.websiteUrl}" target="_blank">{this.props.company.websiteUrl}</a>
            </div>
            <div>
              {descriptionString}
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <span className="class-year">{classString} / {this.props.company.year}</span>
            </div>
            <div>
              Funded:
              <div className="value-figure">
                {fundedValue}
              </div>
            </div>
            <div>
              Exited At:
              <div className="value-figure">
                {exitedAtValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var CompanyList = React.createClass({
  render: function () {
    var companyNodes = this.props.companies.map(function (company) {
      return (
        <CompanyCell company={company}></CompanyCell>
      );
    });
    return (
      <div className="companyList row row-centered">
        {companyNodes}
      </div>
    );
  }
});