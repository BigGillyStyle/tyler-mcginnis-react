import React from 'react';

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedLanguage: 'All' };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState({ selectedLanguage });
  }

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    const { selectedLanguage } = this.state;

    return (
      <ul className="flex-center">
        {languages.map((language) => (
          <li key={language}>
            <button
              type="button"
              className="btn-clear nav-link"
              style={language === selectedLanguage ? { color: 'red' } : null}
              onClick={() => this.updateLanguage(language)}
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
