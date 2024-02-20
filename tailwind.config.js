/**
* Configuration
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: 
            ['./pages/*.html',
            './assets/**/*.js'],
    corePlugins: {
        preflight: false,   
    },
    darkMode: 'class', // or 'media' or 'class' 
    theme: {
        fontFamily: {        
            JosefinSans: ['"Josefin Sans", sans-serif'],                        
            Lato: ['"Lato", sans-serif'],   
            Philosopher: ['"Philosopher", sans-serif']                                
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto', 
            inherit: 'inherit',   
            none: 'none',
            '2': '2 2 0%',
            '31': '0 0 31.4%',     
            '33': '0 0 33.333%',
            '33': '0 1 33%',     
            '40': '0 1 40%',
            '45': '0 1 45%',
            '50': '0 1 50%',
            '55': '0 1 55%',  
            '60': '0 1 60%',        
        },
        colors: {
            transparent: 'transparent', 
            white: '#ffffff', 
            lightblack: '#181818',    
            darkgreen: '#0F1F23',  
            lightgreen: '#465850',
            blue: '#142B39',  
            blue_one: '#003241',  
            lightblue: '#B7D2D6', 
            skindark: '#836953',   
            skinlight: '#FAF7F2',    
            gray: '#FBFBFB',    
        },
        container: {            
            padding: '15px',
        },
        zIndex: {
            '-1': '-1',
            0: 0,
            1: 1,
            2: 2,
            9: 9,
            10: 10,
            20: 20,
            11: 11,
            12: 12,
            98: 98,
            99: 99,
            100: 100,
            999: 999,
            9999: 9999,
        },
        padding: {
            0: '0px', 
            5: '5px', 
            10: '10px', 
            15: '15px', 
            20: '20px', 
            25: '25px', 
            30: '30px', 
            35: '35px', 
            40: '40px', 
            45: '45px', 
            50: '50px', 
            50: '50px', 
            55: '55px',  
            60: '60px', 
            65: '65px', 
            70: '70px', 
            75: '75px', 
            80: '80px', 
            85: '85px',
            90: '90px',
            95: '95px',
            100: '100px',
            110: '110px',  
            120: '120px',
            140: '140px',
            150: '150px',
            
        },
        margin: {
            auto: 'auto',
            0: '0px', 
            5: '5px', 
            10: '10px', 
            15: '15px', 
            20: '20px', 
            25: '25px', 
            30: '30px', 
            35: '35px', 
            40: '40px', 
            45: '45px', 
            50: '50px', 
            50: '50px', 
            55: '55px', 
            60: '60px', 
            65: '65px', 
            70: '70px', 
            75: '75px', 
            80: '80px', 
            85: '85px',
            90: '90px',
            95: '95px',
            100: '100px',
            'minus-15': '-15px',
            
        },
        lineHeight: {            
            12: '12px',
            14: '14px',
            16: '16px',
            18: '18px',
            19: '19px',
            20: '20px',            
            21: '21px',            
            22: '22px',
            23: '23px',
            24: '24px',       
            26: '26px',
            30: '30px',
            36: '36px',       
            38: '38px',                
            40: '40px',                
            45: '45px',
            46: '46px',
            48: '48px',
            55: '55px',
            59: '59px',
        },
        letterSpacing: {            
            '0': '0',   
            '02em': '0.02em',   
            '05em': '0.05em',   
            '08em': '0.08em',   
            '015em': '0.15em',         
        },
        fontSize: {
            10: '10px',
            11: '11px',
            12: '12px',
            13: '13px',
            14: '14px',
            15: '15px',
            16: '16px',
            18: '18px',
            20: '20px',
            21: '21px',
            25: '25px',
            24: '24px',
            28: '28px',
            30: '30px',
            32: '32px',
            36: '36px',
            40: '40px',
            45: '45px',
            48: '48px',
            55: '55px',
            66: '66px',
        }, 
        inset: {
            0: '0px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            8: '8px',
            9: '9px',
            10: '10px',
            13: '13px',
            15: '15px',
            20: '20px',
            25: '25px',
            30: '30px',
            35: '35px',
            40: '40px',            
            50: '50px',
            60: '60px',     
            70: '70px',  
            80: '80px',     
            100: '100px',      
            '40per': '40%',    
            '45per': '45%',    
            '50per': '50%',           
        },
        backgroundImage: theme => ({           
            none: 'none',            
            'gradient1': 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',       
            'gradient2': 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',            
            'gradient3': 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',             
            'gradient4': 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',  
            'gradient5': 'linear-gradient(0deg, rgb(0 0 0 / 94%) 10%, rgb(0 0 0 / 20%) 32%)',
        }),  
        borderRadius: {
            none: '0',
            1: '1px',
            2: '2px',
            4: '4px',
            5: '5px',
            15: '15px',
            30: '30px',
            50: '50%',
            100: '100%',
            500: '500px', 
            999: '999px',
        },
        fontWeight: {
            hairline: 100,
            300: '300',
            400: '400',
            500: '500',
            600: '600',
            700: '700',
        },
        translate: {
            0: '0px',            
            'minus_50': '-50%',
        },
        
        keyframes: {
            stickySlideDown: {
                '0%': { transform: 'translateY(-100%)', opacity: '0.7' },
                '100%': { transform: 'translateY(0)', opacity: '1' }
            }, 
            videobtnring: {
                '0%': { transform: 'rotate(360deg)'},
                '100%': { transform: 'rotate(0deg)'}
            } 
        }, 
        animation: {
            none: 'none', 
            stickySlideDown: 'stickySlideDown 0.5s', 
            videobtnring: 'videobtnring 0.5s',
        },          
        backgroundSize: {
            100: '100%',
            110: '110%',
            120: '120%',
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        blur: {

        },
        brightness: {

        },
        borderWidth: {
            1: '1px',
            0.8: '0.8px',  
            2: '2px',
            0: '0px',
        },
        boxShadow: {
            none: 'none',          
        },
        dropShadow: {
            none: 'none',
            slider_image: '2px 4px 6px rgba(0, 0, 0, 0.15)',     
            slider_image2: '2px 4px 6px rgba(0, 0, 0, 0.25)',     
            logo__box: '2px 4px 6px rgba(0, 0, 0, 0.1)',     
            peopleslider_image3: '2px 4px 6px rgba(0, 0, 0, 0.25)', 
        }, 
        contrast: {},
        outline: {
            none: 'none',
        },
        ringOffsetWidth: {},
        ringWidth: {},
        saturate: {},
        sepia: {},
        skew: {},
        strokeWidth: {},
        transformOrigin: {},
        extend: {
            backdropBlur: {
                sm: '4px',
                md: '8px',
                xs: '10px',
            },
            maxWidth: {
                auto: 'auto',
                container: '1400px',                
            },
            width: {                
                10: '10px',
                20: '20px',
                30: '30px',
                50: '50px',
                '50-per': '50%',
            },
            height: {
                10: '10px',
                20: '20px',
                30: '30px',
                50: '50px',
            },
            minHeight: {
                auto: 'auto',                
            },
            gap: {
                 
            },
            backgroundOpacity: {
                
            },
            maxHeight: {
                
            },
            screens: {
                xl: { 'min': '1200px' },
                xxl: { 'min': '1366px' },    
                maxscreen: { 'min': '2000px' },    

                desktop2: { 'max': '1600px' },
                large_desktop: { 'max': '1600px' },
                desktop: { 'max': '1440px' },
                desktop_small: { 'max': '1400px' },
                laptop: { 'max': '1366px' },                 
                xlscreen: { 'max': '1199.9px' },
                lgscreen: { 'max': '1023px' },
                ipad: { 'max': '991px' },  
                mdscreen: { 'max': '767px' },
                smscreen2: { 'max': '639px' },
                smscreen: { 'max': '575px' },         
                xsscreen2: { 'max': '425px' },
                xsscreen: { 'max': '375px' },
                xsscreen3: { 'max': '360px' },    
            },
        }
    },
    variantOrder: [

    ],
    variants: {
        // extend: {},
    },
    plugins: [
        // require('tailwindcss'),
        function ({ addComponents }) {
            addComponents({

                '.container-xl': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '940px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1340px',
                        margin: 'auto',
                    },
                },


                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '940px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1240px',
                    },
                }
            })
        }

    ],
}