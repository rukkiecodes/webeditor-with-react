import React, { useEffect } from 'react'
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import GrapesConfig from "./GrapesConfig"
import './app.css'


const App = () => {
  useEffect(() => { loadGrapesJs() }, [])
  const loadComponents = (editor) => {
    editor.BlockManager.add('my-block-id', {
      label: "<b>Block</b>",
      content: {
        tagName: 'div',
        draggable: true,
        attributes: { 'some-attribute': 'some-value' },
        components: [
          {
            tagName: 'span',
            content: '<b>Some static content</b>',
          }, {
            tagName: 'div',
            // use `content` for static strings, `components` string will be parsed
            // and transformed in Components
            components: '<span>HTML at some point</span>',
          }
        ]
      }
    })
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
          label: '<u>B</u>',
          command: 'sw-visibility', // Built-in command
        }, {
          id: 'export',
          className: 'btn-open-export',
          label: 'Exp',
          command: 'export-template',
          context: 'export-template', // For grouping context of buttons from the same panel
        }, {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command (editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
              .open();
          },
        }
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
        <div className="panel__basic-actions"></div>
        <div className="panel__devices"></div>
        <div className="panel__switcher"></div>
      </div>
      <div className="editor-row">
        <div className="editor-canvas">
          <div id="gjs">
            <h1>Hello world component Rukkie</h1>
          </div>
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
