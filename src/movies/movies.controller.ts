import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('')
export class MoviesController {
    @Get()
    getMovies() {
        return 'This will return all movies';
    }

    @Get("/search")
    search(@Query("year") searchingYear: string) {
        return `We are searching for a movie made after: ${searchingYear}`;
    }


    @Get("/:id")
    getMovieOne(@Param("id") id: String) {
        return `This will return ${id} moivies`;
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Delete("/:id")
    remove(@Param('id') id: string) {
        return `This will delete a movie: ${id}`;
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() updateData) {
        return {
            updatedMovie: id,
            ...updateData
        }
    }


}