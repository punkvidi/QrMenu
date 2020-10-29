import React from 'react';
import SubmitComponent from './SubmitComponent';
import '../styles.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
    };
    this.addingItems = this.addingItems.bind(this);
  }

  addingItems(name, description, price, category) {
    let inputItem = {
      name: name,
      description: description,
      price: price,
    };
    let joined = this.state.items;
    let newConcat = [inputItem];
    if (joined[category] !== undefined) {
      joined[category].push(inputItem);
    }
    if (joined[category] === undefined) {
      joined[category] = newConcat;
    }
    this.setState({ items: joined });
  }

  render() {
    let menu = [];
    let obj = this.state.items;
    let x = 0
    Object.keys(obj).forEach((key) => {
      x++
      let menuItems = [];
      let currentHTML = (
        <div>
          <div className='category-list'><p className="categories-item">{key}</p></div>
          <div>{menuItems}</div>
        </div>
      );
      for (let i = 0; i < obj[key].length; i++) {
        let item = obj[key][i];
        menuItems.push(
          <div className='menu-items'>
            <div className="item-name">{item.name}</div>
            <div className="item-price"><p className="item-price-2">{item.price}</p></div>
            <div className='description'>{item.description}</div>
          </div>
        );
      }
      menu.push(currentHTML);
    });

    return (
      <div className='head'>
        <div className='menu' id='menu'>
          {menu}
        </div>
        <SubmitComponent method={this.addingItems} />
      </div>
    );
  }
}

export default Input;
