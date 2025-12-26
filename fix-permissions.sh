#!/bin/bash
# Fix permissions for nginx to serve the blog

# Parent directories need to be traversable
chmod 755 /home/r
chmod 755 /home/r/repos
chmod 755 /home/r/repos/blog

# Directories need to be readable and traversable
find /home/r/repos/blog -type d -exec chmod 755 {} \;

# Files need to be readable
find /home/r/repos/blog -type f -exec chmod 644 {} \;

echo "Permissions fixed!"
