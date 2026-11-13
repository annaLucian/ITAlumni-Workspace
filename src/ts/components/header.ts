export const header = (idbtn: string, classDrop: string) => {
    const button = document.getElementById(idbtn) as HTMLButtonElement;
    const dropdown = document.querySelector(classDrop) as HTMLDivElement;

    if (button && dropdown) {
        button.onclick = () => {
            dropdown.classList.toggle('dropdown--active');
        };
    }
};
