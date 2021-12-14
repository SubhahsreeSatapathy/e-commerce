import React from 'react'


const Sidebar = (products) => {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Category</h3>
            <div className="sidebarList">
              <div className="category">
                <input
                  type="checkbox"
                  id="men"
                  name="men"
                  value="men's clothes"
                />
                men's clothes
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sidebar
