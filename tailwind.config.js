/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                whatsapp: {
                    50: '#F0FDF4',
                    100: '#DCFCE7',
                    400: '#4ADE80',
                    500: '#25D366', // WhatsApp bright green
                    600: '#00A884', // WhatsApp teal-green
                    700: '#0B5C4D',
                    800: '#0C4A42',
                    900: '#0C3E37', // WhatsApp deep forest
                    950: '#062420',
                },
                canvas: {
                    light: '#F8F6F0', // warm cream / WhatsApp web style
                    card: '#FFFFFF',
                    dark: '#0B141A',  // WhatsApp dark mode
                    darkCard: '#111B21',
                    darkElevated: '#1F2C34',
                },
                slateText: {
                    main: '#111B21',
                    muted: '#54656F',
                    lightMuted: '#8696A0',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(17, 27, 33, 0.06), 0 2px 6px -1px rgba(17, 27, 33, 0.04)',
                'soft-xl': '0 20px 40px -15px rgba(17, 27, 33, 0.08), 0 0 1px 1px rgba(17, 27, 33, 0.05)',
                'glow': '0 0 25px rgba(37, 211, 102, 0.25)',
            }
        },
    },
    plugins: [],
}
