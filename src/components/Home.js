/*eslint-disable*/
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { message } from 'antd';
import Cleave from "cleave.js/react";
import 'antd/dist/antd.css';
import "./Home.scss"


const Home = () => {

  const [fullName, setFullName] = useState();
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState();
  const [addressLink, setAddressLink] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [zipCode, setZipCode] = useState();
  const [email, setEmail] = useState();
  const [creditCardNo, setCreditCardNo] = useState("");
  const [creditCardExpiryDate, setCreditCardExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [details, setDetails] = useState(false);

  const onFullName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setFullName(e.target.value)
    }
  }

  const onMobile = e => {
    setMobile(e.target.rawValue)
  }

  const onAddress = (e) => {
    setAddress(e.target.value)
  }
  const onAddressLink = (e) => {
    setAddressLink(e.target.value)
  }

  const onCountry = (e) => {
    setCountry(e.target.value);
  };


  const onCity = (e) => {
    setCity(e.target.value);
  };

  const onZipCode = (e) => {
    setZipCode(e.target.value)
  }

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const validEmail = validateEmail(email);

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value)
    }
  }

  const onCreditCardChange = (e) => {
    setCreditCardNo(e.target.rawValue);
  }

  const onCreditCardExpiryChange = (e) => {
    setCreditCardExpiryDate(e.target.rawValue);
  }

  const onCVVChange = (e) => {
    setCVV(e.target.rawValue);
  }
  const onSubmit = () => {
    if (!fullName || !mobile || !address || !country || !city || !zipCode || !email || !creditCardNo || !creditCardExpiryDate || !cvv) {
      message.error('Please fill all the fields')
    } else if (mobile.length !== 10) {
      message.error('Please enter the valid Mobile')
    } else if (zipCode.length !== 6) {
      message.error('Please enter the valid Zipcode')
    } else if (validEmail === false) {
      message.error('Please enter the valid Email')
    } else if (creditCardNo.length !== 16) {
      message.error('Please enter the valid Credit Card Number')
    }
    else {
      setDetails(true)
    }
  }

  return (
    <div className='page'>
      <Row className="shipping-wrapper-page">
        <Col className='card' >
          <div className='shipping-card-left'>
            <h3 >Coustomer Details</h3>
            {!details ? <div>
              <div className="label-shipping">
                <label className="shipping-label-info">Full Name <span className="red-star">*</span></label>
                <input
                  type="text"
                  value={fullName}
                  onChange={onFullName}
                  maxLength={30}>
                </input>
              </div>
              <div className="label-shipping">
                <label className="shipping-label-info">Phone Number <span className="red-star">*</span> </label>
                <Cleave
                  value={mobile}
                  onChange={onMobile}
                  options={{
                    blocks: [3, 3, 4],
                    numericOnly: true,
                  }}
                />
              </div>

              <div className="label-shipping">
                <label className="shipping-label-info">Email <span className="red-star">*</span> </label>
                <input
                  type="text"
                  value={email}
                  onChange={onEmail}
                  maxLength={50}>
                </input>
              </div>
            </div> :
              <div>
                <Row>
                  <Col>
                    <div>{fullName}</div>
                  </Col>
                </Row>
                <Row >
                  <Col>
                    <div>{mobile}</div>
                  </Col>
                  <Col>
                    <div>{email}</div>
                  </Col>
                </Row>
              </div>
            }
          </div>
        </Col>
        <Col className='card'>
          <div className='shipping-card-right'>
            <h3 >Shipping Address</h3>
            {!details ? <div>
              <div className="label-shipping">
                <label className="shipping-label-info">Address linl-1 <span className="red-star">*</span> </label>
                <input
                  type="text"
                  value={address}
                  onChange={onAddress}
                  maxLength={30}>
                </input>
              </div>
              <div className="label-shipping">
                <label className="shipping-label-info">Address linl-2</label>
                <input
                  type="text"
                  value={addressLink}
                  onChange={onAddressLink}
                  maxLength={30}>
                </input>
              </div>
              <div className="label-shipping">
                <label className="shipping-label-info">Country <span className="red-star">*</span> </label>
                <input
                  type="text"
                  value={country}
                  onChange={onCountry}>
                </input>
              </div>
              <div className="label-shipping">
                <label className="shipping-label-info">City <span className="red-star">*</span> </label>
                <input
                  type="text"
                  value={city}
                  onChange={onCity}>
                </input>
              </div>
              <div className="label-shipping">
                <label className="shipping-label-info">Zip-Code <span className="red-star">*</span> </label>
                <Cleave
                  value={zipCode}
                  onChange={onZipCode}
                  options={{
                    blocks: [6],
                    numericOnly: true
                  }}
                />
              </div>
            </div> :
              <div>
                <Row>
                  <Col>
                    <div>{address}</div>
                  </Col>
                </Row>
                <Row >
                  <Col>
                    <div>{addressLink}</div>
                  </Col>
                  <Col>
                    <div>{country}</div>
                  </Col>
                  <Col>
                    <div>{city}</div>
                  </Col>
                  <Col>
                    <div>{zipCode}</div>
                  </Col>
                </Row>
              </div>
            }
          </div>
        </Col>
      </Row>
      <Row className='card-bottom'>
        <div className='card-details'>
          <h3 >Credit Card Details</h3>
          {!details ? <div>
            <div>
              <label className="shipping-label-info">Credit Card Number <span className="red-star">*</span> </label>
              <Cleave
                options={{
                  creditCard: true,
                }}
                onChange={onCreditCardChange}
                className="form-field"
              />
            </div>
            <div>
              <label className="shipping-label-info">Date <span className="red-star">*</span> </label>
              <Cleave
                options={{ date: true, datePattern: ["m", "d"] }}
                onChange={onCreditCardExpiryChange}
                className="form-field"
              />
            </div>
            <div>
              <label className="shipping-label-info">CVV <span className="red-star">*</span> </label>
              <Cleave
                options={{
                  blocks: [3],
                  numericOnly: true
                }}
                onChange={onCVVChange}
                className="form-field"
              />
            </div>
          </div> :
            <div>
              <Row>
                <Col>
                  <div>{creditCardNo}</div>
                </Col>
              </Row>
              <Row >
                <Col>
                  <div>{creditCardExpiryDate}</div>
                </Col>
                <Col>
                  <div>{cvv}</div>
                </Col>
              </Row>
            </div>
          }
        </div>
      </Row>
      <Row>
        <Col sm={3} className='checkout-btn'>
          <div className='checkout-btn-align'>
            <button
              type="button"
              className=" shipping-btn"
              onClick={onSubmit} >
              Save
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;