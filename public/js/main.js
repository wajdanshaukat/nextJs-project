console.log("Main JS loaded!");

const useScrollNavigation = () => {
    useEffect(() => {
        const handleScroll = () => {
            // Add your scroll logic
            console.log('Scrolling...');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};