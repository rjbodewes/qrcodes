import './App.css';
import React, { Component } from 'react';
import New from './Apistuff';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import {Link} from 'react-router-dom'


const navigation = [
  { name: 'QR', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class App extends Component {
  constructor(props) {
    super(props);
    
    /* name = ssid, password = wifi password */
    this.state = {
      count:0,
      name: "",
      render: false,

    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleRenderClick = this.handleRenderClick.bind(this)


  }

  /* handles name change of network id */
  handleNameChange(event) {
    this.setState({name: event.target.value})
  };

  handleRenderClick () {
    if (this.state.render === false) {
      this.setState({ render: true })
    } else {
      this.setState({ render: false })
    }
  };

  refreshPage() {
    window.location.reload(false);
  };

  handleKeyPress(e) {
    if (e.key === 'Enter') {
        this.setState({ render: true }); 
    }
}

  

  
  /* main render statement */
  render() {
    return (
      <div>
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                          {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>


        {/* This is where the header ends */}
        
       


        <div>
    

          {/* This is where the card is */}
        
          <iframe src='https://my.spline.design/noisedisplacecopy-e03d80bd0ffa8e11d240bc0aed28fbe3/' frameborder='0' width='100%' height='100%'></iframe>                
          <div className="bg-white overflow-hidden shadow rounded-lg w-11/12 mx-auto mt-20">
              <div className="px-4 py-5 sm:p-6">{/* CONTENT GOES HERE */}
                <New name={this.state.name} className="block mx-auto" show={this.state.render}/>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-9/12 h-12 sm:text-sm border-gray-300 rounded-md mx-auto pl-4"
                  placeholder="embed link"
                  onChange={this.handleNameChange}
                  value={this.state.name}
                  onKeyUp={this.handleKeyPress.bind(this)}
                />

                <div className="flex justify-center">
                  <button
                    type="button"
                    className="px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 h-12 mx-2"
                    onClick={this.handleRenderClick}
                    >
                    Render
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 h-12 mx-2"
                    onClick={this.refreshPage}
                    >
                    Refresh
                  </button>

                  
                </div>
              
              
              </div>
          </div>
        </div>
               
      </div>
    );
  }

}

export default App;
