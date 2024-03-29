// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
    config: {
        // choose either `'stable'` for receiving highly polished,
        // or `'canary'` for less polished but more frequent updates
        updateChannel: 'stable',

        // buffer length
        scrollback: 3000,

        // default font size in pixels for all tabs
        fontSize: 13,

        // font family with optional fallbacks
        fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace, Monaco, PowerlineSymbols',

        // default font weight: 'normal' or 'bold'
        fontWeight: 'normal',

        // font weight for bold characters: 'normal' or 'bold'
        fontWeightBold: 'bold',

        // line height as a relative unit
        lineHeight: 1,

        // letter spacing as a relative unit
        letterSpacing: 0,

        // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
        cursorColor: 'rgba(51, 176, 78, 0.9)',

        // terminal text color under BLOCK cursor
        cursorAccentColor: '#000',

        // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
        cursorShape: 'BLOCK',

        // set to `true` (without backticks and without quotes) for blinking cursor
        cursorBlink: false,

        // color of the text
        foregroundColor: '#eff0eb',

        // terminal background color
        // opacity is only supported on macOS
        backgroundColor: '#282a36',

        // terminal selection color
        selectionColor: 'f81ce5',

        // border color (window, tabs)
        borderColor: '#333',

        // custom CSS to embed in the main window
        css: '',

        // custom CSS to embed in the terminal window
        termCSS: '',

        // if you're using a Linux setup which show native menus, set to false
        // default: `true` on Linux, `true` on Windows, ignored on macOS
        showHamburgerMenu: '',

        // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
        // additionally, set to `'left'` if you want them on the left, like in Ubuntu
        // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
        showWindowControls: '',

        // custom padding (CSS format, i.e.: `top right bottom left`)
        padding: '12px 14px',

        // the full list. if you're going to provide the full color palette,
        // including the 6 x 6 color cubes and the grayscale map, just provide
        // an array here instead of a color map object
        colors: {
            black: '#000000',
            red: '#ff5c57',
            green: '#5af78e',
            yellow: '#f3f99d',
            blue: '#57c7ff',
            magenta: '#ff6ac1',
            cyan: '#9aedfe',
            white: '#C7C7C7',
            lightBlack: '#686868',
            lightRed: '#ff5c57',
            lightGreen: '#5af78e',
            lightYellow: '#f3f99d',
            lightBlue: '#6A76FB',
            lightMagenta: '#ff6ac1',
            lightCyan: '#9aedfe',
            lightWhite: '#C7C7C7',
        },

        // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
        // if left empty, your system's login shell will be used by default
        //
        // Windows
        // - Make sure to use a full path if the binary name doesn't work
        // - Remove `--login` in shellArgs
        //
        // Bash on Windows
        // - Example: `C:\\Windows\\System32\\bash.exe`
        //
        // PowerShell on Windows
        // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
        shell: '',

        // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
        // by default `['--login']` will be used
        shellArgs: ['--login'],

        // for environment variables
        env: {},

        // set to `false` for no bell
        bell: 'SOUND',

        // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
        copyOnSelect: false,

        // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
        defaultSSHApp: true,

        backgroundImage: '/Users/z002mrf/Pictures/Hawkeye/purple_face.jpg',

        // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
        // selection is present (`true` by default on Windows and disables the context menu feature)
        // quickEdit: true,

        // URL to custom bell
        // bellSoundURL: 'http://example.com/bell.mp3',

        // for advanced config flags please refer to https://hyper.is/#cfg
        // pokemon: ['kabutops', 'pidgeot', 'primeape', 'psyduck', 'golduck', 'pinser', 'snorlax', 'tauros', 'poliwag', 'poliwhirl', 'poliwrath'],
        // unibody: 'false',
        // poketab: 'true',

        // other configs...
        paneNavigation: {
            debug: false,
            hotkeys: {
                navigation: {
                    up: 'ctrl+cmd+up',
                    down: 'ctrl+cmd+down',
                    left: 'ctrl+cmd+left',
                    right: 'ctrl+cmd+right'
                },
                jump_prefix: 'ctrl+cmd', // completed with 1-9 digits
                permutation_modifier: 'shift', // Added to jump and navigation hotkeys for pane permutation
                maximize: 'cmd+enter'
            },
            showIndicators: true, // Show pane number
            indicatorPrefix: '^⌥', // Will be completed with pane number
            indicatorStyle: { // Added to indicator <div>
                position: 'absolute',
                top: 0,
                left: 0,
                fontSize: '10px'
            },
            focusOnMouseHover: false,
            inactivePaneOpacity: 0.6 // Set to 1 to disable inactive panes dimming
        }
    },

    // a list of plugins to fetch and install from npm
    // format: [@org/]project[#version]
    // examples:
    //   `hyperpower`
    //   `@company/project`
    //   `project#1.0.1`
    plugins: ["hyper-pane", "hyper-background"],

    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: [],

    keymaps: {
        // Example
        // 'window:devtools': 'cmd+alt+o',
    },
};