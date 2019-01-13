import React from 'react';
import Tree from 'react-d3-tree';

const style = {
  links: {
    stroke: '#007fff'
  },
  nodes: {
    node: {
      circle: {
        fill: '#5B94D4',
        stroke: '#5B94D4',
        strokeWidth: 3,
      }
    },
    leafNode: {
      circle: {
        fill: '#5B94D4',
        stroke: '#5B94D4',
        strokeWidth: 3,
      }
    },
  },
}

const initPos = {x: 20, y: 160}

const myTreeData = [
    {
      name: 'Beijing, CHN',
      attributes: {
        year: 1997,
        event: 'Born'
      }, 
      styles: {
          nodes: {
              circle: {
                  stroke: 'blue',
                  strokeWidth: 3
              }
          }
      },
      children: [
        {
          name: 'Bethesda, MD',
          attributes: {
            year: 2013,
            event: 'Move to US'
          },
          children: [
            {
              name: 'Atlanta, GA',
              attributes: {
                year: 2016,
                event: 'Start College',
                college: 'Georgia Tech',
                major: 'CS',
                status: '3rd Year'
              },
              children: [
                {
                  name: 'GT FIDO Lab',
                  attributes: {
                    year: 2017,
                    status: 'In Progress',
                    event: 'Wearable Tech'
                  },
                  children: [
                    {
                      name: 'GT Brain Lab',
                      attributes: {
                        year: 2017,
                        status: 'In Progress',
                        event: 'Quantitative Research'
                      }
                    }
                  ]
                },
                {
                  name: 'Itential, LLC',
                  attributes: {
                    year: 2018,
                    term1: 'DevOps',
                    term2: 'Project Delivery'
                  },
                  children: [
                    {
                      name: 'Waiting for the next'
                    }
                  ]
                },
              ],
            }
          ],
        }
      ],
    },
  ];

class MyTree extends React.Component {
  render() {
    return (
      <div id="treeWrapper" style={{width: '50em', height: '25em'}}>
        <Tree data={myTreeData} translate={initPos} styles={style} zoomable='false' />
      </div>
    );
  }
}

export default MyTree;