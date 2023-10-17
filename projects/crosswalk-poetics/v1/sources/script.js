async function spaNavigate(link, e) {
    if (!document.startViewTransition) {
        router.push(link);
        return;
    };

    
};