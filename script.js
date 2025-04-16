function generateLink() {
    const originalLink = document.getElementById('linkInput').value;
    if (!originalLink) return;

    const encodedLink = encodeURIComponent(originalLink);
    const customLink = `${location.origin}/redirect.html?to=${encodedLink}`;
    document.getElementById('output').innerHTML = `
        Link kustom kamu: <a href="${customLink}" target="_blank">${customLink}</a>
    `;
}
