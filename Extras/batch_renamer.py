import os
from os.path import join as join_path
from pathlib import Path


# Function to rename multiple files
def replacer(find_str, new_str, location):
    for file_name in os.listdir(location):
        if file_name.find(find_str) != -1:
            new_file_name = file_name.replace(find_str, new_str)
            print(f"Renaming {file_name} to {new_file_name}")
            os.rename(
                join_path(location, file_name), join_path(location, new_file_name)
            )


# Driver Code
user_input = input('[G]eneric rename, or remove "copy" from [I]cons names?: ').upper()

if user_input == "G":
    loc = input("Directory to look within: ")
    find = input("What is the string to look for: ")
    new = input("What is the string to replace with: ")
    replacer(find, new, loc)

elif user_input == "I":
    loc = Path(__file__).parent / "../Themes/"
    for directory in os.listdir(loc):
        icon_folder_path = loc / directory / "Icons"
        if os.path.exists(icon_folder_path):
            replacer(" copy.png", ".png", str(icon_folder_path.resolve()) + "/")
