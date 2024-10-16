#!/usr/bin/env bash

# Create the project root directory with the project name
mkdir SystemBuilder
cd SystemBuilder

# Create frontend structure
mkdir -p frontend/src/components
mkdir -p frontend/src/ai

# Create backend structure with correct package naming
mkdir -p backend/src/main/java/com/aegis/systembuilder/representation
mkdir -p backend/src/main/java/com/aegis/systembuilder/catalog
mkdir -p backend/src/main/java/com/aegis/systembuilder/codegen
mkdir -p backend/src/main/java/com/aegis/systembuilder/server
mkdir -p backend/src/main/java/com/aegis/systembuilder/integration

# Create testing structure
mkdir -p backend/src/test/java/com/aegis/systembuilder/testing

# Create versioning directory
mkdir versioning

# Print the directory structure
cd ..
tree SystemBuilder