import React, { useState } from "react";
import Tree from "react-d3-tree";
import rootData from "./data/root.json";
import familyData from "./data/data.json";

const containerStyles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "66vh",
  width: "158vh",
  margin: "-33px 12px 0px 0px",
};

const treeContainerStyles = {
  width: "100%",
  height: "90%",
  backgroundColor: "#f0f0f0",
  padding: "10px",
  margin: "0px 0px 0px px", // Updated margin
};

const customPathFunc = ({ source, target }) => {
  const xOffset = 80; // Adjust the offset value as needed
  const yMidpoint = (source.y + target.y) / 1.8;
  const pathData = `M ${source.x + xOffset} ${source.y} 
                   L ${source.x + xOffset} ${yMidpoint} 
                   ${target.x + xOffset} ${yMidpoint} 
                   ${target.x + xOffset} ${target.y}`;
  return pathData;
};



export default function TreeComponent() {
  const [selectedNode, setSelectedNode] = useState(null);

  const familyTreeData = {};
  const personMap = new Map();

  personMap.set(rootData.root.id, {
    name: `${rootData.root.First_Name} ${rootData.root.Last_Name}`,
    attributes: {
      partner: rootData.root.Partner,
      age: rootData.root.Age,
      description: rootData.root.Description,
      image: rootData.root.Image,
    },
    children: [],
  });

  const addChildren = (family) => {
    const parent = personMap.get(family.id);
    if (parent) {
      for (const child of family.children) {
        const childData = {
          id: child.id,
          name: `${child.First_Name} ${child.Last_Name}`,
          attributes: {
            partner: child.Partner,
            age: child.Age,
            description: child.Description,
            image: child.Image,
          },
          children: [],
        };
        personMap.set(child.id, childData);
        parent.children.push(childData);
        addChildren(child);
      }
    }
  };

  for (const family of familyData.families) {
    addChildren(family);
  }

  familyTreeData.name = `${rootData.root.First_Name} ${rootData.root.Last_Name}`;
  familyTreeData.attributes = {
    partner: rootData.root.Partner,
    age: rootData.root.Age,
    description: rootData.root.Description,
    image: rootData.root.Image,
  };
  familyTreeData.children = [personMap.get(rootData.root.id)];

  const handleNodeClick = (nodeDatum) => {
    setSelectedNode(nodeDatum);
  };

  const handleCloseCard = () => {
    setSelectedNode(null);
  };

  const renderCustomNodeElement = ({ nodeDatum, ...rd3tProps }) => {
    const personName = nodeDatum.name.split(" ")[0];
    const partnerName = nodeDatum.attributes.partner;
  
    const personSquareWidth = personName.length * 12 + 10;
    const partnerSquareWidth = partnerName.length * 25 + 50;
  
    const handleClickSquare = () => {
      handleNodeClick(nodeDatum);
    };
  
    const xWithSpacing = rd3tProps.rd3tState ? rd3tProps.rd3tState.position.x + personSquareWidth + 10 : 0;
    
    return (
      <g>
        <rect
          width={personSquareWidth + 15}
          height={70}
          fill="#e8cccc"
          onClick={handleClickSquare}
          key={`square-${nodeDatum.id}-1`}
        />
        <rect
          x={personSquareWidth + 15}
          width={partnerSquareWidth}
          height={70}
          fill="#629df5"
          onClick={handleClickSquare}
          key={`square-${nodeDatum.id}-3`}
        />
        {rd3tProps.rd3tState && rd3tProps.rd3tState.position && (
          <line
            x1={xWithSpacing}
            y1={rd3tProps.rd3tState.position.y}
            x2={xWithSpacing}
            y2={rd3tProps.rd3tState.position.y + 10}
            stroke="black"
            strokeWidth="3"
            key={`line-${nodeDatum.id}`}
          />
        )}
        <text
          fill="black"
          x={35}
          y={40}
          textAnchor="middle"
          alignmentBaseline="start"
          key={`text-${nodeDatum.id} -1`}
        >
          {personName}
        </text>
        <text
          fill="black"
          x={personSquareWidth + 25}
          y={40}
          textAnchor="start"
          alignmentBaseline="middle"
          key={`text-${nodeDatum.id}-1`}
        >
          {"Married to: " + partnerName}
        </text>
      </g>
    );
  };

  return (
    <div style={containerStyles}>
      <div style={treeContainerStyles}>
                <Tree
            data={familyTreeData}
            orientation="vertical"
            renderCustomNodeElement={renderCustomNodeElement}
            pathFunc={customPathFunc}
            translate={{ x: 450, y: 5 }}
            zoom={0.8}
            scaleExtent={{ max: 1.2, min: 0.8 }}
            zoomable={false}
            separation={{ siblings: 2, nonSiblings: 2}} // Adjust the values as needed
          />  

      </div>
      <div >
        {selectedNode && (
          <div className="card mb-4">
            <div className="row g-0 bg-body-secondary">
              <div className="col-md-4 container bg-body-secondary">
                {selectedNode.attributes.image && (
                  <img
                    src={selectedNode.attributes.image}
                    className="img-fluid rounded-circle mx-auto d-block"
                    alt={selectedNode.Image}
                  />
                )}
              </div>
              <div className="col-md-10">
                <div className="card-body container bg-body-secondary">
                  <h5 className="card-title">{selectedNode.name}</h5>
                  {selectedNode.attributes.partner && (
                    <p className="card-text">
                      Married to: <b>{selectedNode.attributes.partner}</b>
                    </p>
                  )}
                  {selectedNode.attributes.age && (
                    <p className="card-text">
                      Age: <b>{selectedNode.attributes.age}</b>
                    </p>
                  )}
                  {selectedNode.attributes.description && (
                    <p className="card-text">
                      Description: <b>{selectedNode.attributes.description}</b>
                    </p>
                  )}
                  <button className="btn btn-outline-danger" onClick={handleCloseCard}>
                    Close
                  </button>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
