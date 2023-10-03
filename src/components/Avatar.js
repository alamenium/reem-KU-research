import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import FaceSelector from './FaceSelector';
import EyesSelector from './EyesSelector';
import HairSelector from './HairSelector';
import ClothesSelector from './ClothesSelector';
import SkinColorSelector from './SkinColorSelector';

function Avatar() {
  const [activeTab, setActiveTab] = useState('face');

  return (
      <div className="avatar">
        <Tabs
            activeKey={activeTab}
            onSelect={(key) => setActiveTab(key)}
            id="avatar-tabs"
        >
          <Tab eventKey="face" title="Face">
            {activeTab === 'face' && <FaceSelector />}
          </Tab>
          <Tab eventKey="eyes" title="Eyes">
            {activeTab === 'eyes' && <EyesSelector />}
          </Tab>
          <Tab eventKey="hair" title="Hair">
            {activeTab === 'hair' && <HairSelector />}
          </Tab>
          <Tab eventKey="clothes" title="Clothes">
            {activeTab === 'clothes' && <ClothesSelector />}
          </Tab>
          <Tab eventKey="skin" title="Skin Color">
            {activeTab === 'skin' && <SkinColorSelector />}
          </Tab>
        </Tabs>

        {/* Render the selected tab's content here */}
        {activeTab === 'face' && <div className="avatar-preview">Face preview</div>}
        {activeTab === 'eyes' && <div className="avatar-preview">Eyes preview</div>}
        {activeTab === 'hair' && <div className="avatar-preview">Hair preview</div>}
        {activeTab === 'clothes' && <div className="avatar-preview">Clothes preview</div>}
        {activeTab === 'skin' && <div className="avatar-preview">Skin Color preview</div>}
      </div>
  );
}

export default Avatar;
