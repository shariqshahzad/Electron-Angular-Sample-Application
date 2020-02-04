{
    hooks: afterCopy: [(buildPath, electronVersion, platform, arch, callback) => {
        throw "I'm here";
        rebuild({ buildPath, electronVersion, arch })
            .then(() => callback())
            .catch((error) => callback(error));
    }
    ]
}