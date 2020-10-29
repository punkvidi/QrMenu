import React from 'react';
import '../styles.scss';
import PDFcreator from './PDFcreator';

class SubmitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemName: null,
      ItemDescription: null,
      ItemPrice: null,
    };
  }

  render() {
    return (
      <div className="buttons_">
        <form>
          <label htmlFor='ItemCategory'>Item's Category:</label>
          <textarea
            type='text'
            id='ItemCategory'
            name='ItemCategory'
            maxLength='30'
            placeholder='Insert Item Category Here'
            className='ItemCategory'
            required
          ></textarea>
          <label htmlFor='ItemName'>Item's Name:</label>
          <textarea
            type='text'
            id='ItemName'
            name='ItemName'
            maxLength='30'
            placeholder='Insert Item Name Here'
            className='ItemName'
            required
          ></textarea>
          <label htmlFor='ItemDescription'>Item's Description:</label>
          <textarea
            type='text'
            id='ItemDescription'
            name='ItemDescription'
            maxLength='200'
            placeholder='Insert Item Description Here'
            className='ItemDescription'
            required
          ></textarea>
          <label htmlFor='ItemPrice'>Item's Price:</label>
          <textarea
            type='text'
            id='ItemPrice'
            name='ItemPrice'
            maxLength='10'
            placeholder='Insert Item Price Here'
            className='ItemPrice'
            required
          ></textarea>
        </form>
        <div>
          <button
            className='add-item-button'
            onClick={() => {
              let category = document.getElementById('ItemCategory').value;
              let name = document.getElementById('ItemName').value;
              let description = document.getElementById('ItemDescription')
                .value;
              let price = document.getElementById('ItemPrice').value;
              if (name && description && price) {
                this.props.method(name, description, price, category);
              }
            }}
          >
            Add an Item
          </button>
          <PDFcreator />
        </div>
      </div>
    );
  }
}

export default SubmitComponent;
