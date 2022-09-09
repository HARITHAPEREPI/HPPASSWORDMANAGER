import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const colorList = ['teal', 'yellow', 'emerald', 'orange', 'blue', 'maroon']

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    passwordItemsList: [],
    isTrue: false,
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  searchList = event => {
    this.setState({searchInput: event.target.value})
  }

  deletePassword = passwordItemId => {
    const {passwordItemsList} = this.state

    this.setState({
      passwordItemsList: passwordItemsList.filter(
        password => password.id !== passwordItemId,
      ),
    })
  }

  renderPasswordItemsList = () => {
    const {passwordItemsList} = this.state

    return passwordItemsList.map(eachItem => (
      <PasswordItem
        key={eachItem.id}
        passwordItemDetails={eachItem}
        deletePassword={this.deletePassword}
        isChecked={this.isChecked}
      />
    ))
  }

  addPasswordItem = event => {
    event.preventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state
    const backgroundColor = `initial-container ${
      colorList[Math.ceil(Math.random() * colorList.length)]
    }`
    const newPassword = {
      id: v4(),
      webSite: websiteInput,
      userName: userNameInput,
      password: passwordInput,
      isChecked: false,
      initialClassName: backgroundColor,
    }

    this.setState(prevState => ({
      passwordItemsList: [...prevState.passwordItemsList, newPassword],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  render() {
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      passwordItemsList,
      searchInput,
    } = this.state
    let {isTrue} = this.state
    if (passwordItemsList.length === 0) {
      isTrue = false
    } else {
      isTrue = true
    }

    return (
      <div className="app-container">
         
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="first-container">
                  
          <form
            className="add-password-container"
            onSubmit={this.addPasswordItem}
          >
            <h1 className="add-password-heading">Add New Password</h1>          
            <div className="password-manager-container">
                         
              <div className="website-input-container">
                           
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-logo"
                />
                            
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="website-input"
                  value={websiteInput}
                  onChange={this.onChangeWebsite}
                />
                         
              </div>
              <div className="username-input-container">
                          
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="username-logo"
                />
                           
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="username-input"
                  value={userNameInput}
                  onChange={this.onChangeUserName}
                />
                        
              </div>
              <div className="password-input-container">
                            
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="password-logo"
                />
                             
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="password-input"
                  value={passwordInput}
                  onChange={this.onChangePassword}
                />
                        
              </div>
                 
            </div>
            <button type="submit" className="add-button">
              Add             
            </button>
               
          </form>
            
          <div>
                  
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
                
          </div>
            
        </div>
        <div className="your-password-container">
          <div className="elements-container">
            <div className="count-search-container">
              <h1 className="your-password">Your Passwords</h1>
              <p className="password-items-count">{passwordItemsList.length}</p>
              <div className="search-container">
                            
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
                           
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                  value={searchInput}
                  onChange={this.searchList}
                />
                        
              </div>
                     
            </div>
            <hr className="hr-line" />
            <div className="show-password-check-box">
              <input type="checkbox" className="checkbox" id="checkbox" />
                 
              <label htmlFor="checkbox" className="show-password">
                Show passwords
              </label>
                    
            </div>
                 
          </div>
                    
          {!isTrue && (
            <div className="empty-state">
                           
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p className="no-password">No Passwords</p>           
            </div>
          )}
                    
          {isTrue && (
            <ul className="password-items-list">
              {this.renderPasswordItemsList()}
            </ul>
          )}
                
        </div>
      </div>
    )
  }
}

export default PasswordManager
