/** *****************************************************************************
 * Copyright 2011 See AUTHORS file.
 *
 * Licensed under the Apache License, Version 2 (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ***************************************************************************** */

/** Encapsulates a 2D rectangle defined by its corner point in the bottom left and its extents in x (width) and y (height).
 * @author badlogicgames@gmail.com */
export class Rectangle {
    public x = 0;

    public y = 0;

    public width = 0;

    public height = 0;

    /**
     * @param x Bottom-left x coordinate
     * @param y Bottom-left y coordinate
     * @param width Width
     * @param height Height
     * @returns This rectangle for chaining
     */
    public set(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        return this;
    }

    /**
     * @param x Point x coordinate
     * @param y Point y coordinate
     * @returns Whether the point is contained in the rectangle
     */
    public contains(x: number, y: number) {
        return this.x <= x && this.x + this.width >= x && this.y <= y && this.y + this.height >= y;
    }

    /**
     * @param r The other {@link Rectangle}
     * @returns Whether this rectangle overlaps the other rectangle.
     */
    public overlaps(r: Rectangle) {
        return (
            this.x < r.x + r.width && this.x + this.width > r.x && this.y < r.y + r.height && this.y + this.height > r.y
        );
    }
}
