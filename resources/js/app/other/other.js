export function toggleSidebar(isSidebarActive) {
    return new Promise((resolve) => {
        resolve(!isSidebarActive);
    });
}
