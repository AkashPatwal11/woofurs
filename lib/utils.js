// Utility function to calculate age from date of birth
export function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const now = new Date();
    
    let age = now.getFullYear() - dob.getFullYear();
    
    if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
        age--;
    }
    
    return age;
}

export function calculateMilestoneDate(dateOfBirth, milestone) {
    const dob = new Date(dateOfBirth);
    let milestoneDate = new Date(dob);

    switch (milestone) {
        case '1 week':
            milestoneDate.setDate(dob.getDate() + 7);
            break;
        case '4 weeks':
            milestoneDate.setDate(dob.getDate() + 28);
            break;
        case '8 weeks':
            milestoneDate.setDate(dob.getDate() + 56);
            break;
        case '6 months':
            milestoneDate.setMonth(dob.getMonth() + 6);
            break;
        case '3 months':
            milestoneDate.setMonth(dob.getMonth() + 3);
            break;
        default:
            if (milestone.includes('years')) {
                const years = parseInt(milestone);
                milestoneDate.setFullYear(dob.getFullYear() + years);
            } else {
                milestoneDate = new Date(dateOfBirth);
            }
    }

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[milestoneDate.getMonth()];
    const year = milestoneDate.getFullYear();

    return `${month}, ${year}`;
}