// @ts-nocheck
import React, { useEffect } from 'react'
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import GrapesConfig from "./GrapesConfig"
import './icon/css/materialdesignicons.min.css'
import './app.css'
import logoLight from "./logoLight.png"
import singleColumn from "./singleColumn.svg"
import doubleColumn from "./doubleColumn.svg"
import tripleColumn from "./tripleColumn.svg"
import doubleFractionColumn from "./doubleFractionColumn.svg"
import text from "./text.svg"
import image from "./image.svg"
import video from "./video.svg"


const App = () => {
  useEffect(() => { loadGrapesJs() }, [])
  const loadComponents = (editor) => {
    const bm = editor.BlockManager;
    // const toAdd = name => config.blocks.indexOf(name) >= 0;

    bm.add('one-column', {
      category: 'Basic',
      label: `<div class="styleBlock"><img style="width: 90%" src="${singleColumn}"><span>1 column</span></div>`,
      attributes: { class: 'column_one' },
      content: [
        `
          <div class="row" id="itbl">
            <div class="cell">
            </div>
          </div>
          <style>
            .row{
                display:flex;
                justify-content:flex-start;
                align-items:stretch;
                flex-wrap:nowrap;
                padding:10px;
              }
              .cell{
                min-height:75px;
                flex-grow:1;
                flex-basis:100%;
              }
              @media (max-width: 768px){
                .row{
                  flex-wrap:wrap;
                }
              }
          </style>`,
      ],
    })
    bm.add('two-columns', {
      category: 'Basic',
      label: `<div class="styleBlock"><img style="width: 90%" src="${doubleColumn}"><span>2 columns</span></div>`,
      attributes: { class: 'column_two' },
      content: [
        `
          <div class="row">
            <div class="cell">
            </div>
            <div class="cell">
            </div>
          </div>
          <style>
            .row{
              display:flex;
              justify-content:flex-start;
              align-items:stretch;
              flex-wrap:nowrap;
              padding:10px;
            }
            .cell{
              min-height:75px;
              flex-grow:1;
              flex-basis:100%;
            }
            @media (max-width: 768px){
              .row{
                flex-wrap:wrap;
              }
            }
          </style>`,
      ],
    })
    bm.add('three-columns', {
      category: 'Basic',
      label: `<div class="styleBlock"><img style="width: 90%" src="${tripleColumn}"><span>3 columns</span></div>`,
      attributes: { class: 'column_three' },
      content: [
        `
          <div class="row">
            <div class="cell">
            </div>
            <div class="cell">
            </div>
            <div class="cell">
            </div>
          </div>
          <style>
            .row{
              display:flex;
              justify-content:flex-start;
              align-items:stretch;
              flex-wrap:nowrap;
              padding:10px;
            }
            .cell{
              min-height:75px;
              flex-grow:1;
              flex-basis:100%;
            }
            @media (max-width: 768px){
              .row{
                flex-wrap:wrap;
              }
            }
          </style>`,
      ],
    })

    bm.add('two-columns-3', {
      category: 'Basic',
      label: `<div class="styleBlock"><img style="width: 90%" src="${doubleFractionColumn}"><span>2 columns 3/7</span></div>`,
      attributes: { class: 'column_two' },
      content: [
        `
          <div class="row">
            <div class="cell" id="imo4">
            </div>
            <div class="cell" id="isxu">
            </div>
          </div>
          <style>
            .row{
              display:flex;
              justify-content:flex-start;
              align-items:stretch;
              flex-wrap:nowrap;
              padding:10px;
            }
            .cell{
              min-height:75px;
              flex-grow:1;
              flex-basis:100%;
            }
            #imo4{
              flex-basis:30%;
            }
            #isxu{
              flex-basis:70%;
            }
            @media (max-width: 768px){
              .row{
                flex-wrap:wrap;
              }
            }
          </style>`,
      ],
    })

    bm.add('text-block', {
      category: 'Basic',
      label: `<div class="styleBlock"><img style="width: 80%" src="${text}"><span>Text</span></div>`,
      attributes: { class: 'text_block' },
      content: [
        `
        <div id="ikg9">Insert your text here</div>
        <style>
          #ikg9{
            padding:10px;
          }
        </style>
        `
      ]
    });

    bm.add('image-block', {
      category: 'Basic',
      label: `<div class="styleBlock"><img style="width: 90%" src="${image}"><span>Text</span></div>`,
      attributes: { class: 'image_block' },
      select: true,
      content: { type: 'image' },
      activate: true,
      editable: true,
    });

    bm.add('video-block', {
      category: 'Basic',
      label: `<div class="styleBlock"><img style="width: 90%" src="${video}"><span>Video</span></div>`,
      attributes: { class: 'image_block' },
      select: false,
      content: { type: 'video' },
      activate: false,
      editable: true,
    });

    bm.add('link-block', {
      category: 'Basic',
      label: 'Link Block',
      attributes: { class: 'fa fa-link' },
      content: {
        type: 'link',
        editable: false,
        droppable: true,
        style: {
          display: 'inline-block',
          padding: '5px',
          'min-height': '50px',
          'min-width': '50px'
        }
      },
    });
    bm.add('quote', {
      label: 'Quote',
      category: 'Basic',
      attributes: { class: 'fa fa-quote-right' },
      content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`
    });

    bm.add('text-basic', {
      category: 'Basic',
      label: 'Text section',
      attributes: { class: 'gjs-fonts gjs-f-h1p' },
      content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`
    });
    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });
    editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: `<span class="mdi mdi-border-all-variant"></span>`,
          command: 'sw-visibility', // Built-in command
        }, {
          id: 'export',
          className: 'btn-open-export',
          label: `<span class="mdi mdi-code-tags"></span>`,
          command: 'export-template',
          context: 'export-template', // For grouping context of buttons from the same panel
        }, {
          id: 'show-json',
          className: 'btn-show-json',
          label: `<span class="mdi mdi-code-json"></span>`,
          context: 'show-json',
          command (editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
              .open();
          },
        },
      ],
    });
    // Define commands
    editor.Commands.add('show-layers', {
      getRowEl (editor) { return editor.getContainer().closest('.editor-row'); },
      getLayersEl (row) { return row.querySelector('.layers-container') },

      run (editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
      },
      stop (editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
      },
    });

    editor.Commands.add('show-styles', {
      getRowEl (editor) { return editor.getContainer().closest('.editor-row'); },
      getStyleEl (row) { return row.querySelector('.styles-container') },

      run (editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop (editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });

    // Define command
    // ...
    editor.Commands.add('show-traits', {
      getTraitsEl (editor) {
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector('.traits-container');
      },
      run (editor, sender) {
        this.getTraitsEl(editor).style.display = '';
      },
      stop (editor, sender) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });
    editor.Commands.add('show-blocks', {
      getTraitsEl (editor) {
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector('.blocks-container');
      },
      run (editor, sender) {
        this.getTraitsEl(editor).style.display = '';
      },
      stop (editor, sender) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });
    // Commands
    editor.Commands.add('set-device-desktop', {
      run: editor => editor.setDevice('Desktop')
    });
    editor.Commands.add('set-device-iPad', {
      run: editor => editor.setDevice('Ipad')
    });
    editor.Commands.add('set-device-mobile', {
      run: editor => editor.setDevice('Mobile')
    });
  }
  const loadGrapesJs = async () => {
    const editor = await grapesjs.init(GrapesConfig())
    loadComponents(editor)
  }
  return (
    <div className="App">
      <div className="panel__top">
        <div className="left">
          <div className="panel__devices"></div>
          <div className="logo">
            <img src={logoLight} className="logo_image" />
            <span>Railer</span>
          </div>
          <div className="panel__basic-actions"></div>
        </div>
        <div className="panel__switcher"></div>
      </div>
      <div className="editor-row">
        <div className="editor-canvas">
          <div id="gjs"></div>
        </div>
        <div className="panel__right">
          <div className="layers-container"></div>
          <div className="styles-container"></div>
          <div className="traits-container"></div>
          <div className="blocks-container" id="blocks"></div>
        </div>
      </div>
    </div>
  )
}
export default App
