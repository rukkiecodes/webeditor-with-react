import React from "react"
import 'grapesjs/dist/css/grapes.min.css';

const GrapesConfig = () => {
  return {
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: '300px',
    width: 'auto',

    // append blocks
    blockManager: {
      appendTo: '#blocks',
    },

    layerManager: {
      appendTo: '.layers-container'
    },
    // We define a default panel as a sidebar to contain layers
    panels: {
      defaults: [
        // ...
        {
          id: 'panel-switcher',
          el: '.panel__switcher',
          buttons: [{
            id: 'show-layers',
            active: true,
            label: 'Layers',
            command: 'show-layers',
            // Once activated disable the possibility to turn it off
            togglable: false,
          }, {
            id: 'show-style',
            active: true,
            label: 'Styles',
            command: 'show-styles',
            togglable: false,
          }],
        }
      ]
    },
    // The Selector Manager allows to assign classes and
    // different states (eg. :hover) on components.
    // Generally, it's used in conjunction with Style Manager
    // but it's not mandatory
    selectorManager: {
      appendTo: '.styles-container'
    },
    styleManager: {
      appendTo: '.styles-container',
      sectors: [{
        name: 'Dimension',
        open: false,
        // Use built-in properties
        buildProps: ['width', 'min-height', 'padding', 'display', 'color', 'background-color'],
        // Use `properties` to define/override single property
        properties: [
          {
            // Type of the input,
            // options: integer | radio | select | color | slider | file | composite | stack
            type: 'integer',
            name: 'The width', // Label for the property
            property: 'width', // CSS property (if buildProps contains it will be extended)
            units: ['px', '%', 'pt', 'em', 'rem', 'vh', 'vw', 'mm', 'cm'], // Units, available only for 'integer' types
            defaults: 'auto', // Default value
            min: 0, // Min value, available only for 'integer' types
          }
        ]
      }, {
        name: 'Extra',
        open: false,
        buildProps: ['background-color', 'box-shadow', 'custom-prop', 'transform'],
        properties: [
          {
            id: 'custom-prop',
            name: 'Custom Label',
            property: 'font-size',
            type: 'select',
            defaults: '32px',
            // List of options, available only for 'select' and 'radio'  types
            options: [
              { value: '12px', name: 'Tiny' },
              { value: '18px', name: 'Medium' },
              { value: '32px', name: 'Big' },
            ],
          }
        ]
      }]
    },

    // Disable the storage manager for the moment
    storageManager: false,
  }
}

export default GrapesConfig
